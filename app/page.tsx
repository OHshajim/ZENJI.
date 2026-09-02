import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Marquee } from '@/components/storefront'
import { featuredProducts } from '@/data/products'
import { Hero } from '@/components/hero'
import { ProductGrid } from '@/components/productCard'
import { Newsletter } from '@/components/newaletter'
import { Reveal } from '@/components/reveal'
export default function Home() {
    return <main>
        <Hero />
        <Marquee />
        <section className="section">
            <Reveal className="section-head">
                <div>
                    <span className="kicker">Selected pieces / 001</span>
                    <h2>Latest drop<span className="dot">.</span></h2>
                </div>
                <Link className="button" href="/shop">View all pieces <ArrowUpRight size={16} /></Link>
            </Reveal>
            <ProductGrid items={featuredProducts} />
        </section>
        <section className="section editorial">
            <Reveal>
                <div><span className="red-label">01 / AFTER DARK</span>
                    <h2>Made for the hours that don&apos;t make the feed.</h2>
                    <p className="muted">ZENJI is a fictional streetwear label built around original worlds, considered details, and the freedom to move differently.</p>
                    <Link className="button" href="/collections">Explore collections <ArrowUpRight size={16} /></Link>
                </div>
            </Reveal>
            <Reveal delay={120}>
                <Image src="/images/zenji-editorial.png" alt="ZENJI model in a brutalist Tokyo setting" width={900} height={1100} />
            </Reveal>
        </section>
        <Newsletter />
    </main>
}
