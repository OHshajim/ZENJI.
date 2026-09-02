import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
const collections = [['After Dark', 'The city after midnight.', '/images/zenji-hero.png'], ['Ronin', 'Quiet armor for loud streets.', '/images/zenji-editorial.png'], ['Tokyo Nights', 'Built for the last train home.', '/images/zenji-collection.png'], ['Core', 'The essentials, refined.', '/images/zenji-product-1.png']]
export default function Collections() {
    return (<main>
        <header className="shop-header">
            <div>
                <span className="kicker">ZENJI / WORLDS</span>
                <h1>Collections<span className="dot">.</span></h1>
            </div>
        </header>
        <section className="section collection-list">
            {collections.map((c, i) => (
                <article className="editorial" key={c[0]}>
                    <Image src={c[2]} alt={`${c[0]} collection`} width={900} height={700} />
                    <div>
                        <span className="red-label">0{i + 1} / ZENJI</span>
                        <h2>{c[0]}<span className="dot">.</span></h2>
                        <p className="muted">{c[1]}</p>
                        <Link className="button" href="/shop">Shop collection <ArrowUpRight size={16} /></Link>
                    </div>
                </article>
            ))}
        </section>
    </main>
    )
}