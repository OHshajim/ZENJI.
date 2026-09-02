'use client'

import { useEffect, useRef } from 'react'

// Dōjutsu cursor (Naruto inspired): an eye that slowly rotates and morphs
// between the Rinnegan (Pain) and the Sharingan on a ~10s cycle.
// Grows over interactive elements; sheds chakra particles on click,
// colored by the eye's current phase.
export function DojutsuCursor() {
    const orb = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) return // touch devices keep native cursor

        document.documentElement.classList.add('dojutsu-on')

        let mx = -100, my = -100, raf = 0
        const CYCLE = 10000 // must match the CSS crossfade duration
        const sharinganPhase = () => (performance.now() % CYCLE) > CYCLE * 0.45

        const move = (e: MouseEvent) => {
            mx = e.clientX
            my = e.clientY
            const t = e.target as Element | null
            orb.current?.classList.toggle('hovering', !!t?.closest?.('a, button, input, select, textarea, label, [role="button"]'))
        }

        const burst = (e: MouseEvent) => {
            const red = sharinganPhase()
            for (let i = 0; i < 8; i++) {
                const p = document.createElement('span')
                p.className = 'chakra-particle'
                const a = (Math.PI * 2 * i) / 8 + Math.random() * 0.4
                p.style.setProperty('--dx', `${Math.cos(a) * 52}px`)
                p.style.setProperty('--dy', `${Math.sin(a) * 52}px`)
                p.style.left = `${e.clientX}px`
                p.style.top = `${e.clientY}px`
                p.style.background = red ? '#ff5a5a' : '#b39aff'
                p.style.boxShadow = `0 0 8px 2px ${red ? '#d62828aa' : '#7e5fd0aa'}`
                document.body.appendChild(p)
                setTimeout(() => p.remove(), 650)
            }
        }

        const loop = () => {
            if (orb.current) orb.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
            raf = requestAnimationFrame(loop)
        }

        window.addEventListener('mousemove', move, { passive: true })
        window.addEventListener('mousedown', burst, { passive: true })
        raf = requestAnimationFrame(loop)

        return () => {
            document.documentElement.classList.remove('dojutsu-on')
            window.removeEventListener('mousemove', move)
            window.removeEventListener('mousedown', burst)
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <div ref={orb} className="dojutsu-orb" aria-hidden="true">
            <div className="dojutsu-eye">
                <svg viewBox="0 0 64 64">
                    <g className="iris">
                        {/* Rinnegan: concentric ripple rings on lavender */}
                        <g className="rinnegan-face">
                            <circle cx="32" cy="32" r="29" fill="#cfc2ee" />
                            {[27, 21.5, 16, 10.5, 5].map(r => (
                                <circle key={r} cx="32" cy="32" r={r} fill="none" stroke="#7c68b5" strokeWidth="1.6" />
                            ))}
                            <circle cx="32" cy="32" r="2.2" fill="#4d3d78" />
                        </g>
                        {/* Sharingan: crimson iris with three tomoe */}
                        <g className="sharingan-face">
                            <circle cx="32" cy="32" r="29" fill="#a51220" />
                            <circle cx="32" cy="32" r="5.4" fill="#12070a" />
                            {[0, 120, 240].map(a => (
                                <g key={a} transform={`rotate(${a} 32 32)`}>
                                    <path fill="#12070a" d="M32 12.6a4.3 4.3 0 1 0 .01 0zM35.9 14.7q6.2 2.6 4.6 9.1-.7-5.4-6-7.3z" />
                                </g>
                            ))}
                        </g>
                    </g>
                    <circle cx="32" cy="32" r="30" fill="none" stroke="#17131c" strokeWidth="2.4" />
                </svg>
            </div>
        </div>
    )
}
