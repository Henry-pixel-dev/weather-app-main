import React from 'react'

const SearchLists = () => {
  const { searchHistory } = useOutletContext();
  return (
    <ul className='top-5 left-1/2 flex flex-row items center w-full p-5 bg-neutral-700 rounded-lg max-w-[537px] space-x-3 p-5'>
      <li className='hover:bg-neutral-600 hover:border hover:border-neutral-600 rounded-md p-3 text-neutral-0 w-full'>
        Abuja
      </li>
    </ul>
  )
}

export default SearchLists