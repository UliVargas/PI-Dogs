'use client'
import { ChangeEvent } from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Button } from './button';
import { useDebouncedCallback } from 'use-debounce'

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if(term) {
      params.set('search', term)
    } else {
      params.delete('search')
    }

    replace(`${pathname}?${params.toString()}`)
  }, 500)

  return (
    <div className='border-2 rounded-md flex items-center focus-within:border-emerald-600'>
      <input type='text'
        className='flex-1 p-2 focus-visible:outline-none bg-transparent'
        placeholder='Buscar raza...'
        defaultValue={searchParams.get('search')?.toString()}
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)}

      />
      <Button className='bg-transparent hover:bg-transparent py-0 px-0' >
        <BiSearchAlt className='w-7 h-7 text-gray-500 cursor-pointer hover:text-emerald-600 hover:scale-110' />
      </Button>
    </div>
  )
}