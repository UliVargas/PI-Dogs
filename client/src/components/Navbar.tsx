import Link from 'next/link'
import { FC } from 'react'

interface ILink {
  href: string
  style: string
  label: string
}

const Links: ILink[] = [
  {
    href: '/home',
    label: 'Home',
    style: 'link link-hover'
  },
  {
    href: '/dog/creation',
    label: 'Create Dog',
    style: 'link link-hover'
  }
]

export const Navbar: FC = () => {
  return (
    <nav className="navbar bg-base-300">
      <div className="w-[1200px] mx-auto text-blue-400 hover:text-white flex gap-2">
        {Links.map(({ href, label, style }) => (
          <Link key={href} href={href} className={style}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
