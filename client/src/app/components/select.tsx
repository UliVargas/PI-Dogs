'use client'
import { useState } from 'react'

export interface Options {
  label: string
  value: string
}

export const Select = ({ label, options }: { label: string; options: Options[] }) => {
  const [selected, setSelected] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value)
  }

  return (
    <div className='grid grid-flow-row'>
      <label>
        {label}
      </label>
      <select onChange={handleChange}
        className='px-4 py-1.5 bg-emerald-600 text-white border rounded'
      >
        {
          options.map(({ label, value }) => (
            <option key={label} value={value}>
              {label}
            </option>
          ))
        }
      </select>
    </div>
  )
}