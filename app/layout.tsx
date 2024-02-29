import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Providers from '@/app/providers'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Portfolio - Oriel Nijamkin',
    description: "'Oriel Nijamkin's Portfolio",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'relative h-full font-sans antialiased dark bg-black',
                    inter.className
                )}
            >
                <main className="mx-auto md:max-w-screen-sm px-10 py-24">
                    <Providers>{children}</Providers>
                </main>
                <Analytics />
            </body>
        </html>
    )
}
