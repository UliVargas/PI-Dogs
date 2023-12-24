import Link from 'next/link'

interface Routes {
  href: string,
  label: string
}

const routes: Routes[] = [
  {
    href: '/home',
    label: 'Inicio'
  },
  {
    href: '/crear-raza',
    label: 'Crear Nueva Raza'
  }
]
export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {
            routes.map(({ href, label }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))
          }
        </li>
      </ul>
    </nav>
  )
}