import { ReactNode } from "react"
import type { Metadata } from "next"
import "@/database/firebase"
import { SkeletonTheme } from "react-loading-skeleton"

import ContextMenuWrapper from "@/modules/ContextMenuWrapper"
import StoreProvider from "@/store/StoreProvider"
import { noto_sans } from "@/UI/fonts"

import "./globals.css"
import "react-loading-skeleton/dist/skeleton.css"

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
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <StoreProvider>
        <SkeletonTheme baseColor='#202020' highlightColor='#444'>
          <body className={`${noto_sans.className} antialiased`}>
            <ContextMenuWrapper>{children}</ContextMenuWrapper>
          </body>
        </SkeletonTheme>
      </StoreProvider>
    </html>
  )
}
