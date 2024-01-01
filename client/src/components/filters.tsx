import { SearchBar } from './search-bar'
import { Options, Select } from './select'

const sorted: Options[] = [
  {
    label: 'A - Z',
    value: 'Asc'
  },
  {
    label: 'Z - A',
    value: 'Desc'
  }
]

const filtered: Options[] = [
  {
    label: 'Peso',
    value: 'wight'
  },
  {
    label: 'Altura',
    value: 'height'
  }
]

export const Filters = () => {
  return (
    <div className='hidden md:flex gap-6 items-center justify-center mt-10'>
      <div className='flex-1'>
        <SearchBar />
      </div>
      <div className='flex gap-5'>
        <Select label='Filtrar por:' options={filtered} />
        <Select label='Ordenar por:' options={sorted} />
      </div>
    </div>
  )
}