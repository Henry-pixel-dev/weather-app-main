import React from 'react';
import loadingIcon from '../assets/images/icon-loading.svg'

const SearchingState = () => {
  return (
    <div className='top-5 left-1/2 flex flex-row items center w-full p-5 bg-neutral-700 rounded-lg max-w-[537px] space-x-3'>
        <img src={loadingIcon} alt="search icon" />
        <p className='text-white text-sm font-bold' >
            Search in progress
        </p>
    </div>
  )
}

export default SearchingState
