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
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-icons/gi/index.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/weather-icons/css/weather-icons.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}