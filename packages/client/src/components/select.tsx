'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, FC, useEffect } from 'react'

export interface Options {
  label: string
  value: string
}

interface SelectProps {
  options: Options[]
  defaultOption?: string
}

export const Select: FC<SelectProps> = ({ options, defaultOption }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(Array.from(searchParams.entries()));

  const handleChange = (value: string) => {

    switch (value) {
      case 'ASC':
        params.set('sort', value)
        break;
      case 'DESC':
        params.set('sort', value)
        break;
      case 'remove-sort':
        params.delete('sort')
        break;
      case 'remove-filter':
        params.delete('temperament')
        break;
      default:{
        params.delete('search')
        params.set('temperament', value)
        break;
      }
    }

    replace(`${pathname}?${params.toString()}`)
  }

  useEffect(() => {
    params.set('sort', 'ASC')
    replace(`${pathname}?${params.toString()}`)
  }, [])

  return (
    <select
      onChange={(event: ChangeEvent<HTMLSelectElement>) => handleChange(event.target.value)}
      className='px-4 py-3 border rounded-md'
      value={defaultOption ?? ''}
    >
      {
        !defaultOption && (
          <option value="" disabled>
            Seleccionar...
          </option>
        )
      }
      {
        options.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))
      }
    </select>
  )
}