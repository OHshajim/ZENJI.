import Image from 'next/image'

export default function About() {
    return <main>
        <header className="shop-header">
            <div>
                <span className="kicker">ZENJI / A FICTIONAL BRAND STORY</span>
                <h1>Built from culture.<br /><em>Made for the streets.</em></h1>
            </div>
        </header>
        <section className="section">
            <div className="editorial">
                <Image src="/images/zenji-editorial.png" alt="ZENJI editorial — After Dark collection" width={900} height={700} />
                <div>
                    <span className="red-label">Where it started</span>
                    <h2>Anime roots. Tokyo nights. Streets everywhere.</h2>
                    <p className="muted">ZENJI was born from late-night anime marathons, underground record stores, and the quiet confidence of people who dress for themselves. We pulled references from Ronin archetypes, neon-lit backstreets, and the kind of silhouettes you remember even when the person has already walked away.</p>
                    <p className="muted">Every collection is a chapter. After Dark, Ronin, Tokyo Nights, Core — each one a different frequency of the same signal.</p>
                </div>
            </div>
            <div className="editorial">
                <Image src="/images/zenji-hero.png" alt="ZENJI collection — garments laid flat" width={900} height={700} />
                <div>
                    <span className="red-label">How we build</span>
                    <h2>Move in silence. Make your own signal.</h2>
                    <p className="muted">No logos demanding attention. No trend-chasing. ZENJI pieces are built around weight, drape, and fit — the things you feel before you see them. Heavyweight fleece for after dark. Technical shells for sudden weather. Dense cotton basics with precise proportions.</p>
                    <p className="muted">Considered uniforms for the next wave. No costume. No noise. Just the right layer for wherever the night takes you.</p>
                </div>
            </div>
        </section>
    </main>
}