import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './emotions'

export const metadata: Metadata = {
  title: 'Molecule Properties Predictor',
  description: 'Developed using create necxt-app and shadcn/ui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
