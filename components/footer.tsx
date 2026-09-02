import Link from "next/link";

const PORTFOLIO = "https://shajim-portfolio.vercel.app/";

export function Footer() {
    return <footer>
        <div className="footer-top">
            <Link href="/" className="wordmark">ZENJI<span className="dot">.</span></Link>
            <p>ANIME ROOTS.<br />STREET CULTURE.<br />BUILT DIFFERENT.</p>
        </div>
        <div className="footer-links">
            <div><span className="kicker">Explore</span>
                <Link href="/shop">Shop</Link>
                <Link href="/collections">Collections</Link>
                <Link href="/about">About</Link>
            </div>
            <div><span className="kicker">Customer</span>
                <Link href="/shipping">Shipping</Link>
                <Link href="/returns">Returns</Link>
                <Link href="/size-guide">Size guide</Link>
            </div>
            <div><span className="kicker">Follow</span>
                <a href={PORTFOLIO} target="_blank" rel="noreferrer">Instagram</a>
                <a href={PORTFOLIO} target="_blank" rel="noreferrer">TikTok</a>
                <a href={PORTFOLIO} target="_blank" rel="noreferrer">X / Twitter</a>
            </div>
        </div>
        <div className="footer-bottom">
            © 2026 ZENJI. ALL RIGHTS RESERVED.
            <span>MADE BY <a className="footer-credit" href={PORTFOLIO} target="_blank" rel="noreferrer">SHAJIM AHMED</a></span>
        </div>
    </footer>
}
