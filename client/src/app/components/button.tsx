import { ReactNode } from 'react'

export const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className='py-3 px-4 rounded-md bg-emerald-600 hover:bg-emerald-800 text-white'>
      {children}
    </button>
  )
}