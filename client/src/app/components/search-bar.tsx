'use client'
import { ChangeEvent, useState } from 'react'
import { BiSearchAlt } from "react-icons/bi";

export const SearchBar = ({ classes }: { classes?: string }) => {
  const [search, setSearch] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div className='border rounded-md flex items-center py-1 px-2 focus-within:border-emerald-600'>
      <input type='text'
        value={search}
        placeholder='Buscar raza...'
        onChange={handleChange}
        className='flex-1 p-2 focus-visible:outline-none'
      />
      <BiSearchAlt className='w-7 h-7 text-gray-500 cursor-pointer hover:text-emerald-600 hover:scale-105' />
    </div>
  )
}