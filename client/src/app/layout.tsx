import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Header } from './components/Header'
import './globals.css'

const lato = Roboto({
  subsets: ['latin'],
  weight: ["400", "700", "900"]
})
export const metadata: Metadata = {
  title: 'Dog App',
  description: 'Aplicación de descrición de razas de perros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
