'use client'

import Image from 'next/image'
import Link from 'next/link'
import { createContext, useContext } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { featuredProducts } from '@/data/products'
import type { CartItem } from '@/types/product'

export function CartProvider({ children }: { children: React.ReactNode }) { const [items, setItems] = useState<CartItem[]>([]); useEffect(() => { const raw = localStorage.getItem('zenji-cart'); if (raw) setItems(JSON.parse(raw)); const fn = (e: Event) => { const d = (e as CustomEvent).detail as CartItem; setItems(old => { const found = old.find(i => i.product.id === d.product.id && i.size === d.size); const next = found ? old.map(i => i === found ? { ...i, quantity: i.quantity + 1 } : i) : [...old, { ...d, quantity: 1 }]; localStorage.setItem('zenji-cart', JSON.stringify(next)); return next }) }; window.addEventListener('zenji:add', fn); return () => window.removeEventListener('zenji:add', fn) }, []); return <CartContext.Provider value={{ items, setItems }}>{children}</CartContext.Provider> }

const CartContext = createContext<{ items: CartItem[]; setItems: React.Dispatch<React.SetStateAction<CartItem[]>> } | null>(null)

export function useCart() {
  const c = useContext(CartContext);
  if (!c) throw new Error('useCart must be inside CartProvider'); return c
}

export function Marquee() {
  return <div className="marquee">
    <div>ZENJI — DROP 001 — STREET CULTURE — ANIME ROOTS — ZENJI — DROP 001 — STREET CULTURE — ANIME ROOTS — </div>
  </div>
}

export function CartSummary() {
  const { items, setItems } = useCart();
  const total = items.reduce((a, i) => a + i.product.price * i.quantity, 0);
  const change = (item: CartItem, n: number) => setItems(old => { const next = n < 1 ? old.filter(i => i !== item) : old.map(i => i === item ? { ...i, quantity: n } : i); localStorage.setItem('zenji-cart', JSON.stringify(next)); return next });
  return <>
    {items.map(i =>
      <div className="cart-row" key={i.product.id + i.size}>
        <Image src={i.product.images[0]} alt={i.product.name} width={100} height={120} />
        <div>
          <Link href={`/shop/${i.product.slug}`}><h3>{i.product.name}</h3></Link>
          <span>{i.size} / {i.color}</span>
          <div className="qty">
            <button onClick={() => change(i, i.quantity - 1)} aria-label="Decrease quantity">−</button>{i.quantity}
            <button onClick={() => change(i, i.quantity + 1)} aria-label="Increase quantity">+</button>
          </div>
        </div>
        <strong>${i.product.price * i.quantity}</strong>
      </div>)}
    <div className="cart-total"><span>Subtotal</span><strong>${total}</strong></div>
  </>
}

export const useFeatured = () => useMemo(() => featuredProducts, [])
