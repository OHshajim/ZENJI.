import Link from "next/link";

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
                <a href="#">Shipping</a>
                <a href="#">Returns</a>
                <a href="#">Size guide</a>
            </div>
            <div><span className="kicker">Follow</span>
                <a href="#">Instagram</a>
                <a href="#">TikTok</a>
                <a href="#">X / Twitter</a>
            </div>
        </div>
        <div className="footer-bottom">
            © 2026 ZENJI. ALL RIGHTS RESERVED.
            <span>PRIVACY &nbsp; TERMS</span>
        </div>
    </footer>
}