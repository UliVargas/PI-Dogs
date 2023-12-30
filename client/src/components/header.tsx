import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from './navbar';

export const Header = () => {

  return (
    <header
      className='h-26 border border-red-600'
    >
      <div className='flex justify-around items-center'>
        <div className='w-[100px]'>
          <Link href='/home'>
            <Image src='/logo.png' className='w-full' width={294} height={283} alt='Logo' />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};
