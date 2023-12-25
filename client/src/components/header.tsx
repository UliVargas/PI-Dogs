'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from './navbar';

export const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newPercentage = (scrollPosition / window.innerHeight) * 100;
      setIsHeaderFixed(newPercentage > 12);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`header-container ${isHeaderFixed && 'fixed'}`}
    >
      <div className={'header-content'}>
        <div className={'logo-container'}>
          <Link href='/home'>
            <Image src='/logo.png' className={'logo'} width={294} height={283} alt='Logo' />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};
