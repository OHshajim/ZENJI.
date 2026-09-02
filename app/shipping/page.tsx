import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata = { title: 'Shipping — ZENJI' }

export default function Shipping() {
    return (
        <main className="policy">
            <span className="kicker">ZENJI / SUPPORT — 出荷</span>
            <h1>Shipping<span className="dot">.</span></h1>

            <section className="option">
                <div className="option-label"><span>Dispatch</span><span className="red-label">01 / 発送</span></div>
                <p>Every order leaves our Tokyo hub within 1–2 business days. Once your parcel is on its way you will receive a confirmation email with a tracking number — follow it from our door to yours.</p>
            </section>

            <section className="option">
                <div className="option-label"><span>Rates &amp; delivery</span><span className="red-label">02 / 料金</span></div>
                <div className="table-wrap">
                    <table className="size-table">
                        <thead><tr><th>Region</th><th>Time</th><th>Cost</th><th>Free over</th></tr></thead>
                        <tbody>
                            <tr><td>Japan</td><td>1–2 business days</td><td>¥600</td><td>¥10,000</td></tr>
                            <tr><td>International</td><td>5–10 business days</td><td>$12</td><td>$100</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>Orders above the free-shipping threshold ship on us — applied automatically at checkout.</p>
            </section>

            <section className="option">
                <div className="option-label"><span>Customs &amp; duties</span><span className="red-label">03 / 税関</span></div>
                <p>International parcels may be subject to import duties once they reach your country. These are set by your local customs office and are the responsibility of the recipient. ZENJI is not liable for delays caused by customs processing.</p>
            </section>

            <section className="option">
                <div className="option-label"><span>Missing parcels</span><span className="red-label">04 / 探索</span></div>
                <p>If your tracking has not moved for 7 or more business days, reach out with your order number and we will open an investigation with the carrier. Lost parcels are replaced or refunded in full.</p>
                <Link className="button button-light policy-cta" href="/shop">Start an order <ArrowUpRight /></Link>
            </section>
        </main>
    )
}
