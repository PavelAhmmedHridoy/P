import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { SectionProvider } from "./context/SectionContext"
import "./globals.css"



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
