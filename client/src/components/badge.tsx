import { ReactNode } from 'react'

export const Badge = ({ children }: { children: ReactNode}) => {
  return (
    <div className='bg-emerald-600 rounded text-sm px-3 py-2 text-white'>
      {children}
    </div>
  )
}