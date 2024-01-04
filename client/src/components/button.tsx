import { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={`${className} py-3 px-4 rounded-md bg-emerald-600 hover:bg-emerald-800 text-white`} {...props}>
      {children}
    </button>
  )
}