import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return <section className="hero">
        <Image src="/images/zenji-hero.png" alt="Model wearing ZENJI streetwear in Tokyo" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-copy">
            <span className="kicker">DROP 001 SS / 26 &nbsp; TOKYO → WORLD</span>
            <h1>WEAR<br /><em>THE UNSEEN.</em></h1>
            <p>ANIME ROOTS. STREET CULTURE.<br />BUILT DIFFERENT.</p>
            <Link className="button button-light" href="/shop">Shop the drop <ArrowUpRight size={18} /></Link>
        </div>
        <span className="hero-vertical">ZENJI / 001</span>
    </section>
}