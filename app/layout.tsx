import type { Metadata } from 'next'
import { biggerFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Andaman 50K',
  description: 'Support our swimmers crossing the Andaman Sea for a cause',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${biggerFont.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}