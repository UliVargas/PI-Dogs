import Link from 'next/link'
import { Button } from './button'

interface Routes {
  href: string
  label: string
  icon?: string
  button?: boolean
}

const routes: Routes[] = [
  {
    href: '/home',
    label: 'Crear Raza',
    button: true
  }
]
export const Navbar = () => {
  return (
    <nav>
      {
        routes.map(({ href, label, button }) => (
          <Link key={href} href={href} className='hover:text-emerald-600'>
            {
              button ? (
                <Button>{label}</Button>
              ) : (
                <span>{label}</span>
              )
            }
          </Link>
        ))
      }
    </nav>
  )
}