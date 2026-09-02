'use client'
import Image from 'next/image'
import Link from 'next/link'
import { use, useState } from 'react'
import { ArrowUpRight, Heart } from 'lucide-react'
import { getProduct, products } from '@/data/products'
import { ProductGrid } from '@/components/productCard'

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const p = getProduct(slug);
    if (!p) return <main className="cart-page"><h1>Product not found<span className="dot">.</span></h1><Link className="button" href="/shop">Back to shop <ArrowUpRight /></Link></main>;
    const [image, setImage] = useState(0),
        [size, setSize] = useState(p.sizes[0]),
        [color, setColor] = useState(p.colors[0]);
    return <main>
        <div className="detail">
            <div>
                <div className="gallery-main">
                    <Image src={p.images[image]} alt={p.name} fill priority sizes="(max-width: 800px) 100vw, 55vw" />
                </div>
                <div className="thumbs">{p.images.map((src, i) => <button key={src} onClick={() => setImage(i)} className={image === i ? 'active' : ''}><Image src={src} alt={`${p.name} view ${i + 1}`} width={82} height={96} /></button>)}</div>
            </div>
            <div className="detail-info">
                <span className="kicker">{p.category} / {p.collection}</span>
                <h1>{p.name}<span className="dot">.</span></h1>
                <div className="detail-price">${p.price}</div>
                <p>{p.description}</p>
                <div className="option">
                    <div className="option-label"><span>Color</span><span>{color}</span></div>
                    <div className="choices">{p.colors.map(c => <button className={color === c ? 'active' : ''} key={c} onClick={() => setColor(c)}>{c}</button>)}</div>
                </div>
                <div className="option">
                    <div className="option-label"><span>Size</span><Link href="#size-guide">Size guide</Link></div>
                    <div className="choices">{p.sizes.map(s => <button className={size === s ? 'active' : ''} key={s} onClick={() => setSize(s)}>{s}</button>)}</div>
                </div>
                <button className="button button-light add-button" onClick={() => window.dispatchEvent(new CustomEvent('zenji:add', { detail: { product: p, size, color } }))}>Add to bag <ArrowUpRight /></button>
                <button className="button" onClick={() => window.dispatchEvent(new CustomEvent('zenji:add', { detail: { product: p, size, color } }))}><Heart size={17} /> Save piece</button>
                <div className="option">
                    <div className="option-label"><span>Details</span><span>+</span></div>
                    <p>{p.details.join(' / ')}</p>
                </div>
            </div>
        </div>
        <section className="section">
            <div className="section-head"><h2>More from ZENJI<span className="dot">.</span></h2></div>
            <ProductGrid items={products.filter(x => x.collection === p.collection && x.id !== p.id).slice(0, 4)} />
        </section>
    </main>
}
