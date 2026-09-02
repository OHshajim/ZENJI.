'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Heart } from 'lucide-react'
import { useWishlist } from '@/components/storefront'
import { products } from '@/data/products'

export default function Wishlist() {
    const { ids, toggle } = useWishlist()
    const saved = products.filter(p => ids.includes(p.id))
    return (
        <main className="cart-page">
            <span className="kicker">ZENJI / WISHLIST — お気に入り</span>
            <h1>Saved pieces<span className="dot">.</span></h1>
            {
                saved.length ?
                    <>
                        {saved.map(p =>
                            <div className="wishlist-row" key={p.id}>
                                <Link href={`/shop/${p.slug}`}><Image src={p.images[0]} alt={p.name} width={100} height={120} /></Link>
                                <div>
                                    <Link href={`/shop/${p.slug}`}><h3>{p.name}</h3></Link>
                                    <span>{p.category} / {p.collection}</span>
                                    <button className="wishlist-row-add" onClick={() => window.dispatchEvent(new CustomEvent('zenji:add', { detail: { product: p, size: p.sizes[0], color: p.colors[0] } }))}>Add to bag <ArrowUpRight size={13} /></button>
                                </div>
                                <div className="wishlist-row-side">
                                    <strong>${p.price}</strong>
                                    <button className={`wishlist ${ids.includes(p.id) ? 'active' : ''}`} onClick={() => toggle(p.id)} aria-label={`Remove ${p.name} from wishlist`}>
                                        <Heart size={17} fill="currentColor" />
                                    </button>
                                </div>
                            </div>)}
                    </> :
                    <div className="empty">
                        <h2>Nothing saved yet<span className="dot">.</span></h2>
                        <p className="muted">Tap the heart on any piece to keep it here — it will wait for you.</p>
                        <Link className="button button-light" href="/shop">Find your piece <ArrowUpRight /></Link>
                    </div>
            }
        </main>
    )
}
