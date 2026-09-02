'use client'

import { useEffect, useRef, useState } from 'react'

// Anime-style reveal: content slides up with an easing snap the first time
// it enters the viewport. Delay staggers grid children.
export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const [shown, setShown] = useState(false)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setShown(true)
                io.disconnect()
            }
        }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' })
        io.observe(el)
        return () => io.disconnect()
    }, [])
    return (
        <div ref={ref} className={`reveal${shown ? ' shown' : ''} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
            {children}
        </div>
    )
}
