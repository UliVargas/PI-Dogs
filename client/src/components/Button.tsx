import { FC } from 'react'

interface Props {
  label: string
}

export const Button: FC<Props> = ({ label }) => {
  return <button className='btn btn-accent'>{label}</button>
}
