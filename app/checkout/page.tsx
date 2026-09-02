'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Lock, Zap } from 'lucide-react'
import { useCart } from '@/components/storefront'

export default function Checkout() {
    const { items, setItems } = useCart()
    const [placed, setPlaced] = useState(false)
    const [form, setForm] = useState({ email: '', name: '', address: '', city: '', zip: '', country: '', card: '', exp: '', cvc: '' })
    const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm(f => ({ ...f, [k]: e.target.value }))
    const subtotal = items.reduce((a, i) => a + i.product.price * i.quantity, 0)
    const shipping = subtotal > 100 || subtotal === 0 ? 0 : 12
    const total = subtotal + shipping

    const placeOrder = (e: React.FormEvent) => {
        e.preventDefault()
        setPlaced(true)
        setItems([])
        localStorage.removeItem('zenji-cart')
        window.scrollTo({ top: 0 })
    }

    if (placed) return (
        <main className="checkout-page">
            <span className="kicker">ZENJI / MISSION COMPLETE</span>
            <h1>Order <em>confirmed</em><span className="dot">.</span></h1>
            <p className="muted">Your order has been received. A confirmation scroll is on its way to {form.email || 'your inbox'}.</p>
            <div className="checkout-seal" aria-hidden="true">任務完了</div>
            <Link className="button button-light" href="/shop">Back to the shop <ArrowUpRight /></Link>
        </main>
    )

    if (!items.length) return (
        <main className="checkout-page">
            <span className="kicker">ZENJI / CHECKOUT</span>
            <h1>Nothing to seal<span className="dot">.</span></h1>
            <p className="muted">Your bag is empty — no jutsu can check out an empty order.</p>
            <Link className="button button-light" href="/shop">Shop the collection <ArrowUpRight /></Link>
        </main>
    )

    return (
        <main className="checkout-page">
            <span className="kicker">ZENJI / CHECKOUT — チェックアウト</span>
            <h1>Seal the deal<span className="dot">.</span></h1>

            <div className="checkout-grid">
                <form className="checkout-form" onSubmit={placeOrder}>
                    <section className="option">
                        <div className="option-label"><span>Contact</span><span className="red-label">01 / 伝達</span></div>
                        <input className="field" required type="email" placeholder="Email address" value={form.email} onChange={set('email')} />
                    </section>

                    <section className="option">
                        <div className="option-label"><span>Shipping</span><span className="red-label">02 / 配送</span></div>
                        <input className="field" required placeholder="Full name" value={form.name} onChange={set('name')} />
                        <input className="field" required placeholder="Street address" value={form.address} onChange={set('address')} />
                        <div className="field-row">
                            <input className="field" required placeholder="City" value={form.city} onChange={set('city')} />
                            <input className="field" required placeholder="ZIP / Postal code" value={form.zip} onChange={set('zip')} />
                        </div>
                        <input className="field" required placeholder="Country" value={form.country} onChange={set('country')} />
                    </section>

                    <section className="option">
                        <div className="option-label"><span>Payment</span><span className="red-label">03 / 支払い</span></div>
                        <input className="field" required inputMode="numeric" placeholder="Card number" maxLength={19} value={form.card} onChange={set('card')} />
                        <div className="field-row">
                            <input className="field" required placeholder="MM / YY" maxLength={7} value={form.exp} onChange={set('exp')} />
                            <input className="field" required inputMode="numeric" placeholder="CVC" maxLength={4} value={form.cvc} onChange={set('cvc')} />
                        </div>
                        <p className="muted field-note"><Lock size={12} /> Frontend demo only — no payment is processed and no data leaves your browser.</p>
                    </section>

                    <button className="button button-light add-button" type="submit">
                        Complete order — ${total} <Zap size={14} />
                    </button>
                    <Link className="muted checkout-back" href="/cart">← Back to bag</Link>
                </form>

                <aside className="checkout-aside">
                    <span className="kicker">ORDER SUMMARY / 注文</span>
                    {items.map(i => (
                        <div className="checkout-line" key={i.product.id + i.size}>
                            <Image src={i.product.images[0]} alt={i.product.name} width={64} height={76} />
                            <div>
                                <h3>{i.product.name}</h3>
                                <span>{i.size} / {i.color} / ×{i.quantity}</span>
                            </div>
                            <strong>${i.product.price * i.quantity}</strong>
                        </div>
                    ))}
                    <div className="checkout-totals">
                        <div><span>Subtotal</span><span>${subtotal}</span></div>
                        <div><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `$${shipping}`}</span></div>
                        <div className="cart-total"><span>Total</span><strong>${total}</strong></div>
                    </div>
                </aside>
            </div>
        </main>
    )
}
