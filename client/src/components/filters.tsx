import { SearchBar } from './search'
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

export const Filters = () => {
  return (
    <div className='container-filters'>
      <SearchBar classes='searchbar' />
      <div className='input-filters'>
        <Select label='Filtrar de:' options={sorted}/>
      </div>
    </div>
  )
}