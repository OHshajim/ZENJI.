import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata = { title: 'Returns — ZENJI' }

export default function Returns() {
    return (
        <main className="policy">
            <span className="kicker">ZENJI / SUPPORT — 返品</span>
            <h1>Returns<span className="dot">.</span></h1>

            <section className="option">
                <div className="option-label"><span>The window</span><span className="red-label">01 / 期間</span></div>
                <p>You have 30 days from delivery to return any piece. Items must be unworn and unwashed, with the original tags still attached — pieces that have been worn past a try-on cannot be accepted.</p>
            </section>

            <section className="option">
                <div className="option-label"><span>How to start</span><span className="red-label">02 / 手順</span></div>
                <p>Reach out with your order number and the piece you are sending back. Domestic returns receive a prepaid label; international returns are self-shipped — keep your proof of postage until the refund lands.</p>
            </section>

            <section className="option">
                <div className="option-label"><span>Refunds</span><span className="red-label">03 / 返金</span></div>
                <p>Once your return passes inspection, the refund is issued to your original payment method within 5–7 business days. Shipping costs from the original order are non-refundable.</p>
            </section>

            <section className="option">
                <div className="option-label"><span>Exchanges</span><span className="red-label">04 / 交換</span></div>
                <p>Need a different size? We cover one free size exchange per order — the replacement ships as soon as your return is scanned by the carrier, so you are not left waiting.</p>
                <p>Final-sale pieces marked at checkout are exempt from returns and refunds.</p>
                <Link className="button button-light policy-cta" href="/size-guide">Check the size guide <ArrowUpRight /></Link>
            </section>
        </main>
    )
}
