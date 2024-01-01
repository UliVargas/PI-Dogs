import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from './navbar';

export const Header = () => {

  return (
    <header
      className='h-24 shadow py-3'
    >
      <div className='flex xl:w-[75rem] mx-auto justify-between gap-10 items-center px-10 xl:px-0'>
        <div>
          <Link href='/home'>
            <Image src='/logo.png' className='lg:w-20' width={65} height={60} alt='Logo de Dogs App' />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};
