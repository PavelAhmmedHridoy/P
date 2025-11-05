import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { SectionProvider } from "./context/SectionContext"
import "./globals.css"

// 🧠 add this block
export const metadata: Metadata = {
  title: "Your Website Name",
  icons: {
    icon: "/Logo.jpeg", // place your logo in /public/logo.png
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <SectionProvider>{children}</SectionProvider>
      </body>
    </html>
  )
}
