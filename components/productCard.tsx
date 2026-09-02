"use client";

import { products } from "@/data/products";
import { Product } from "@/types/product";
import { useWishlist } from "@/components/storefront";
import { ArrowUpRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
    const { ids, toggle } = useWishlist();
    const wish = ids.includes(product.id);
    return <article className="product-card">
        <Link href={`/shop/${product.slug}`} className="product-image">
            <Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 700px) 50vw, 25vw" />
            <Image className="second-image" src={product.images[1]} alt="" fill sizes="(max-width: 700px) 50vw, 25vw" />
            {product.isNew && <span className="badge">New</span>}
        </Link>
        <button className={`wishlist ${wish ? 'active' : ''}`} onClick={() => toggle(product.id)} aria-label={`${wish ? 'Remove' : 'Add'} ${product.name} ${wish ? 'from' : 'to'} wishlist`}>
            <Heart size={17} fill={wish ? 'currentColor' : 'none'} />
        </button>
        <div className="product-meta">
            <Link href={`/shop/${product.slug}`}>
                <h3>{product.name}</h3>
            </Link>
            <span>{product.category}</span>
            <strong>${product.price}</strong>
        </div>
        <button className="quick-add" onClick={() => window.dispatchEvent(new CustomEvent('zenji:add', { detail: { product, size: product.sizes[0], color: product.colors[0] } }))}>Quick add <ArrowUpRight size={15} /></button>
    </article>
}

export function ProductGrid({ items = products }: { items?: Product[] }) {
    return <div className="product-grid">{items.map(p => <ProductCard key={p.id} product={p} />)}</div>
}