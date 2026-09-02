import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata = { title: 'Size Guide — ZENJI' }

const TOPS = [
    ['S', 52, 68, 60], ['M', 55, 70, 62], ['L', 58, 72, 64], ['XL', 61, 74, 66], ['XXL', 64, 76, 68],
] as const
const PANTS = [
    ['S', 74, 102, 68], ['M', 78, 106, 70], ['L', 82, 110, 71], ['XL', 86, 114, 72], ['XXL', 90, 118, 72],
] as const

export default function SizeGuide() {
    return (
        <main className="policy">
            <span className="kicker">ZENJI / SUPPORT — 寸法</span>
            <h1>Size guide<span className="dot">.</span></h1>

            <section className="option">
                <div className="option-label"><span>Before you measure</span><span className="red-label">01 / 下準備</span></div>
                <p>ZENJI cuts are relaxed and unisex. All measurements below are garment measurements taken flat, in centimetres — expect ±1.5 cm tolerance from piece to piece. Between sizes? Go up for the oversized drape our lookbook is styled around.</p>
            </section>

            <section className="option">
                <div className="option-label"><span>Tops — tees &amp; hoodies</span><span className="red-label">02 / 上衣</span></div>
                <div className="table-wrap">
                    <table className="size-table">
                        <thead><tr><th>Size</th><th>Chest (flat)</th><th>Body length</th><th>Sleeve</th></tr></thead>
                        <tbody>
                            {TOPS.map(([s, chest, len, sleeve]) => <tr key={s}><td>{s}</td><td>{chest} cm</td><td>{len} cm</td><td>{sleeve} cm</td></tr>)}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="option">
                <div className="option-label"><span>Pants — cargo &amp; wide leg</span><span className="red-label">03 / 裾</span></div>
                <div className="table-wrap">
                    <table className="size-table">
                        <thead><tr><th>Size</th><th>Waist (flat)</th><th>Hip</th><th>Inseam</th></tr></thead>
                        <tbody>
                            {PANTS.map(([s, waist, hip, inseam]) => <tr key={s}><td>{s}</td><td>{waist} cm</td><td>{hip} cm</td><td>{inseam} cm</td></tr>)}
                        </tbody>
                    </table>
                </div>
                <p>Accessories — caps and crossbody bags — come in one size (OS) with adjustable straps.</p>
            </section>

            <section className="option">
                <div className="option-label"><span>How to measure yourself</span><span className="red-label">04 / 測定</span></div>
                <p><strong>Chest</strong> — measure around the fullest point, keep the tape level and relaxed.<br />
                    <strong>Waist</strong> — measure where you naturally wear your pants, usually just below the navel.<br />
                    <strong>Sleeve / inseam</strong> — measure a piece you already own and love, flat on a table, from seam to hem.</p>
                <Link className="button button-light policy-cta" href="/shop">Find your fit <ArrowUpRight /></Link>
            </section>
        </main>
    )
}
