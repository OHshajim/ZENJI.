'use client'
import { useMemo, useState } from 'react'
import { products } from '@/data/products'
import { ProductGrid } from '@/components/storefront'
export default function Shop() {
    const [q, setQ] = useState('');
    const [cat, setCat] = useState('All');
    const [sort, setSort] = useState('Featured');
    const filtered = useMemo(() => products.filter(p => (cat === 'All' || p.category === cat) && `${p.name} ${p.category} ${p.collection}`.toLowerCase().includes(q.toLowerCase())).sort((a, b) => sort === 'Price: Low → High' ? a.price - b.price : sort === 'Price: High → Low' ? b.price - a.price : sort === 'Newest' ? Number(b.isNew) - Number(a.isNew) : Number(b.featured) - Number(a.featured)), [q, cat, sort]);
    return <main>
        <header className="shop-header">
            <div><span className="kicker">ZENJI / CATALOGUE 001</span><h1>Shop<span className="dot">.</span></h1></div>
            <p className="muted">{filtered.length} pieces / Tokyo → world</p></header>
        <div className="filters">
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="SEARCH" aria-label="Search products" />
            {['All', 'Hoodies', 'T-Shirts', 'Jackets', 'Pants', 'Accessories'].map(c => <button className={cat === c ? 'active' : ''} key={c} onClick={() => setCat(c)}>{c}</button>)}
            <select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort products">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low → High</option>
                <option>Price: High → Low</option>
            </select>
        </div>
        <section className="shop-grid">
            {filtered.length ? <ProductGrid items={filtered} /> : <div className="empty"><h2>Nothing found.</h2><p className="muted">Try a different search.</p></div>}
        </section>
    </main>
}
