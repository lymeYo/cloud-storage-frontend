import { ReactNode } from "react"
import type { Metadata } from "next"

import StoreProvider from "@/store/StoreProvider"
import "@/database/firebase"

import "./globals.css"

export const metadata: Metadata = {
  title: "Cloud Storage"
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {

  return (
    <html lang='en'>
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  )
}
