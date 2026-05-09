import React from 'react'
import { useOutletContext } from 'react-router-dom'

const SearchLists = ({ onSearch }) => {
  const { searchHistory } = useOutletContext();
  const items = searchHistory && searchHistory.length > 0 ? searchHistory : ['Berlin'];

  return (
    <ul className='top-5 left-1/2 flex flex-col items center w-full bg-neutral-700 rounded-lg max-w-[537px] space-x-3 p-5'>
      {items.map((city) => (
        <li
          key={city}
          className='hover:bg-neutral-600 hover:border hover:border-neutral-600 rounded-md p-3 text-neutral-0 w-full'
          onClick={() => onSearch(city)}
        >
          {city}
        </li>
      ))}
    </ul>
  )
}

export default SearchLists