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
      <head>
      <script type="text/javascript" lang='javascript' src="C:\Users\asus\Desktop\molecule-properties-predictor\jsme\jsme.nocache.js"></script>
         {/* <script >
          function jsmeOnLoad() {
            jsmeApplet = new JSApplet.JSME("jsme_container", "380px", "340px");
          } 
        </script> */}
      </head>
      <body>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
            <div>
            <div id="JSME" data-code="JME.class" data-name="JME" data-archive="JME.jar" data-width="360" data-height="315">
              You have to enable javascript in your browser to use JSME
            </div>
            <div>
              {children}
            </div>
            </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
