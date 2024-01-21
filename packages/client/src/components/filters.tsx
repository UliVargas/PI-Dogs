'use client'
import { SearchBar } from './search-bar'
import { Options, Select } from './select'
import { Button } from './button'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { TemperamentEntity } from '@/app/interfaces/temperament-entity.interface'

const sorted: Options[] = [
  {
    label: 'A - Z',
    value: 'ASC'
  },
  {
    label: 'Z - A',
    value: 'DESC'
  }
]
export const Filters = ({ temperaments, selectOptions: { sort, temperament } }: { temperaments: TemperamentEntity[];  selectOptions: { sort: string; temperament: string } }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const filtered: Options[] = temperaments.map((temperament) => {
    return {
      label: temperament.name,
      value: temperament.name
    }
  }).sort((a, b) => a.value < b.value ? -1 : 0)

  const deleteFilter = () => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.delete('temperament')
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className='hidden md:flex gap-6 items-center justify-center mt-10'>
      <div className='flex-1'>
        <SearchBar />
      </div>
      <div className='flex gap-5'>
        <div className='flex items-center gap-3'>
          <Select options={sorted} defaultOption={sort ?? 'ASC'} />
        </div>
        <div className='flex items-center gap-3'>
          <Select options={filtered} defaultOption={temperament} />
          <Button onClick={deleteFilter}>Borrar Filtro</Button>
        </div>
      </div>
    </div>
  )
}