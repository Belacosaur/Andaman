import type { Metadata } from 'next'
import { biggerFont } from './fonts'
import { WalletProvider } from './components/wallet/WalletProvider'
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
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  )
}