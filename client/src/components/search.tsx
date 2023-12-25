'use client'
import { ChangeEvent, useState } from 'react'
import { BiSearchAlt } from "react-icons/bi";

export const SearchBar = () => {
  const [search, setSearch] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div className='search-container'>
      <input type='text'
        value={search}
        placeholder='Buscar raza...'
        onChange={handleChange}
        className='search-input'
      />
      <BiSearchAlt className='search-icon' />
    </div>
  )
}