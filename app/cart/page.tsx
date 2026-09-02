'use client'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CartSummary, useCart } from '@/components/storefront'
export default function Cart(){const {items}=useCart();return <main className="cart-page"><span className="kicker">ZENJI / YOUR SELECTION</span><h1>Your bag<span className="dot">.</span></h1>{items.length?<><CartSummary/><button className="button button-light" onClick={()=>alert('Checkout is intentionally mocked for this frontend assessment.')}>Checkout <ArrowUpRight/></button></>:<div className="empty"><h2>Your bag is empty.</h2><p className="muted">Looks like you haven&apos;t found your next piece yet.</p><Link className="button button-light" href="/shop">Shop the collection <ArrowUpRight/></Link></div>}</main>}
