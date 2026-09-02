import type { Metadata, Viewport } from 'next'
import './globals.css'
import { CartProvider } from '@/components/storefront'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = { title: 'ZENJI — Anime Inspired Streetwear', description: 'ZENJI creates anime-inspired streetwear for a new generation of creators, outsiders, and culture shapers.', generator: 'ZENJI' }
export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0a0a0a' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="bg-background">
            <body>
                <CartProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </CartProvider>
            </body>
        </html>
    )
}
