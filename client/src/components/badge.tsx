import { ReactNode } from 'react'

export const Badge = ({ children, classes }: { children: ReactNode, classes?: string }) => {
  return (
    <div className={`bg-emerald-600 rounded text-sm px-2 py-1.5 text-white ${classes}`}>
      {children}
    </div>
  )
}