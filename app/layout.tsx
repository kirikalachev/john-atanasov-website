import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Ден на Джон Атанасов",
  description: "Празнуваме гения на Джон Атанасов и бъдещето на технологиите",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
