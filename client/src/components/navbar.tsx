import Link from 'next/link'
import { Button } from './button'

interface Routes {
  href: string
  label: string
  button?: boolean
}

const routes: Routes[] = [
  {
    href: '/home',
    label: 'Inicio'
  },
  {
    href: '/crear-raza',
    label: 'Crear Nueva Raza',
    button: true
  }
]
export const Navbar = () => {
  return (
    <nav className='nav'>
      {
        routes.map(({ href, label, button }) => (
          <Link key={href} href={href}>
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