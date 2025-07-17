import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Igreja Além das Paredes",
  description: "A Igreja Além das Paredes é uma agência missionária liderada pelo Pr. Sérgio Santos, dedicada a levar esperança, amor e o Evangelho a todos os lugares. Junte-se a nós nessa missão!",
  openGraph: {
    title: "Igreja Além das Paredes",
    description: "A Igreja Além das Paredes é uma agência missionária liderada pelo Pr. Sérgio Santos, dedicada a levar esperança, amor e o Evangelho a todos os lugares. Junte-se a nós nessa missão!",
    images: [
      {
        url: "/WhatsApp Image 2025-07-17 at 13.04.41 (1).jpeg",
        width: 1200,
        height: 630,
        alt: "Igreja Além das Paredes - Missão e Esperança"
      }
    ]
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>{children}</body>
    </html>
  )
}
