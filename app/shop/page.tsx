'use client'
import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { products } from '@/data/products'
import { ProductGrid } from '@/components/productCard'

const CATEGORIES = ['All', 'Hoodies', 'T-Shirts', 'Jackets', 'Pants', 'Accessories'] as const
type Category = typeof CATEGORIES[number]

export default function Shop() {
    const [q, setQ] = useState('');
    const [cat, setCat] = useState<Category>('All');
    const [sort, setSort] = useState('Featured');

    const filtered = useMemo(() =>
        products
            .filter(p =>
                (cat === 'All' || p.category === cat) &&
                `${p.name} ${p.category} ${p.collection}`.toLowerCase().includes(q.toLowerCase())
            )
            .sort((a, b) =>
                sort === 'Price: Low → High' ? a.price - b.price :
                    sort === 'Price: High → Low' ? b.price - a.price :
                        sort === 'Newest' ? Number(b.isNew) - Number(a.isNew) :
                            Number(b.featured) - Number(a.featured)
            ),
        [q, cat, sort]
    );

    const countFor = (c: Category) =>
        c === 'All' ? products.length : products.filter(p => p.category === c).length;

    return <main>
        <header className="shop-header">
            <div>
                <span className="kicker">ZENJI / CATALOGUE 001</span>
                <h1>Shop<span className="dot">.</span></h1>
            </div>
            <p className="muted">{filtered.length} pieces / Tokyo → world</p>
        </header>

        <div className="filters">
            <label className="filter-search" htmlFor="shop-search">
                <Search size={13} strokeWidth={1.5} />
                <input
                    id="shop-search"
                    value={q}
                    onChange={e => setQ(e.target.value)}
                    placeholder="Search…"
                    aria-label="Search products"
                />
            </label>

            <div className="filter-cats">
                {CATEGORIES.map(c => (
                    <button
                        key={c}
                        className={cat === c ? 'active' : ''}
                        onClick={() => setCat(c)}
                    >
                        {c}
                        <span className="filter-count">{countFor(c)}</span>
                    </button>
                ))}
            </div>

            <select
                className="filter-sort"
                value={sort}
                onChange={e => setSort(e.target.value)}
                aria-label="Sort products"
            >
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low → High</option>
                <option>Price: High → Low</option>
            </select>
        </div>

        <section className="shop-grid">
            {filtered.length
                ? <ProductGrid items={filtered} />
                : <div className="empty">
                    <h2>Nothing found<span className="dot">.</span></h2>
                    <p className="muted">Try a different search or filter.</p>
                </div>
            }
        </section>
    </main>
}
