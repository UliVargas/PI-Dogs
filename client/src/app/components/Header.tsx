import Link from 'next/link'
import { Navbar } from './Navbar'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className='h-28 border-2 border-red-600'>
      <section className='flex justify-between items-center'>
        <Link href='/home'>
          <Image src='/logo.png' layout='fill' objectFit='contain' alt='Logo' />
        </Link>
        <Navbar />
      </section>
    </header>
  )
}