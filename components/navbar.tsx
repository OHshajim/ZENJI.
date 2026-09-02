"use client"

import { ArrowUpRight, Heart, ShoppingBag, Menu, Search, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useCart, useWishlist } from "./storefront"
import { products } from "@/data/products"

const NAV_LINKS = [
    { href: '/', label: 'Home', kana: 'ホーム' },
    { href: '/shop', label: 'Shop', kana: 'ショップ' },
    { href: '/collections', label: 'Collections', kana: 'コレクション' },
    { href: '/about', label: 'About', kana: 'について' },
]

// chakra bubbles drifting up behind the fullscreen menu
const BUBBLES = [
    { x: '6%', s: 74, d: 14, delay: 0, sway: 42 },
    { x: '16%', s: 26, d: 11, delay: 2.2, sway: -30 },
    { x: '27%', s: 52, d: 16, delay: 4.5, sway: 36 },
    { x: '38%', s: 18, d: 10, delay: 1.2, sway: -24 },
    { x: '49%', s: 88, d: 18, delay: 3, sway: 50 },
    { x: '61%', s: 34, d: 12, delay: 5.8, sway: -40 },
    { x: '70%', s: 60, d: 15, delay: 0.8, sway: 30 },
    { x: '80%', s: 22, d: 9.5, delay: 3.9, sway: -26 },
    { x: '89%', s: 46, d: 13, delay: 6.4, sway: 44 },
    { x: '95%', s: 30, d: 11.5, delay: 2.8, sway: -34 },
]

export function Navbar() {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState(false)
    const pathname = usePathname()
    const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)
    return <>
        <header className="nav">
            <Link href="/" className="wordmark">ZENJI<span className="dot">.</span><span className="wordmark-kana">ゼンジ</span></Link>
            <nav className="desktop-nav">
                {NAV_LINKS.map(({ href, label, kana }) => (
                    <Link key={href} href={href} className={isActive(href) ? 'active' : ''}>
                        <span className="nav-flip">
                            <span className="nav-label">{label}</span>
                            <span className="nav-kana" aria-hidden="true">{kana}</span>
                        </span>
                    </Link>
                ))}
            </nav>
            <div className="nav-actions">
                <button aria-label="Search" onClick={() => setSearch(true)}><Search size={18} /></button>
                <Link href="/wishlist" aria-label="Wishlist" className={`cart-link ${isActive('/wishlist') ? 'nav-icon-active' : ''}`}><Heart size={18} /><sup><WishCount /></sup></Link>
                <Link href="/cart" aria-label="Cart" className="cart-link"><ShoppingBag size={18} /><sup><CartCount /></sup></Link>
                <button className="menu-button" aria-label="Open menu" onClick={() => setOpen(true)}><Menu size={20} /></button>
            </div>
        </header>
        {open && <div className="mobile-menu">
            <div className="menu-bubbles" aria-hidden="true">
                {BUBBLES.map((b, i) => (
                    <span key={i} style={{ '--x': b.x, '--s': `${b.s}px`, '--d': `${b.d}s`, '--delay': `${b.delay}s`, '--sway': `${b.sway}px` } as React.CSSProperties} />
                ))}
            </div>
            <button className="close" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
            <span className="kicker">ZENJI TOKYO / 2026</span>
            <nav>
                {NAV_LINKS.map(({ href, label }) => (
                    <Link key={href} onClick={() => setOpen(false)} href={href} className={isActive(href) ? 'active' : ''}>
                        {label} <ArrowUpRight />
                    </Link>
                ))}
            </nav>
            <div className="mobile-social"><a href="https://shajim-portfolio.vercel.app/" target="_blank" rel="noreferrer">Instagram</a> / <a href="https://shajim-portfolio.vercel.app/" target="_blank" rel="noreferrer">TikTok</a> / <a href="https://shajim-portfolio.vercel.app/" target="_blank" rel="noreferrer">X</a></div>
        </div>}
        {search && <SearchOverlay close={() => setSearch(false)} />}
    </>
}

function SearchOverlay({ close }: { close: () => void }) {
    const [q, setQ] = useState('');
    const matches = products.filter(p => `${p.name} ${p.category} ${p.collection}`.toLowerCase().includes(q.toLowerCase())).slice(0, 5);
    return <div className="search-overlay" role="dialog" aria-modal="true">
        <button className="close" onClick={close} aria-label="Close search"><X /></button>
        <span className="kicker">SEARCH ZENJI</span>
        <input autoFocus value={q} onChange={e => setQ(e.target.value)} placeholder="What are you looking for?" />
        <div className="search-results">
            {q && matches.map(p => <Link onClick={close} href={`/shop/${p.slug}`} key={p.id}><span>{p.name}</span><span>${p.price}</span></Link>)}{q && !matches.length && <p className="muted">NO MATCHES FOUND. TRY ANOTHER SEARCH.</p>}
        </div>
    </div>
}

export function CartCount() {
    const { items } = useCart();
    return <>{items.reduce((a, i) => a + i.quantity, 0) > 0 && <span className="cart-count">{items.reduce((a, i) => a + i.quantity, 0)}</span>}</>
}

export function WishCount() {
    const { ids } = useWishlist();
    return <>{ids.length > 0 && <span className="cart-count">{ids.length}</span>}</>
}