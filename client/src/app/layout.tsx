import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import { Header } from '@/components/header'
import '../styles/globals.css'

const onest = Onest({
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
      <body className={onest.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
