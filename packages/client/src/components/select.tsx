'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, FC } from 'react'

export interface Options {
  label: string
  value: string
}

export const Select: FC<{ label: string; options: Options[] }> = ({ label, options }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleChange = (value: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if(value === 'DESC' || value === 'ASC') {
      params.set('sort', value)
    } else {
      params.set('filter', value)
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className='grid grid-flow-row'>
      <label>
        {label}
      </label>
      <select
        onChange={(event: ChangeEvent<HTMLSelectElement>) => handleChange(event.target.value)}
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