import React from 'react'
import { PulseLoader } from 'react-spinners'
import dropDownIcon from '../assets/images/icon-dropdown.svg';

const LoadingSkeleton = () => {
  return (
    <div className='container mx-auto flex flex-col  md:grid md:grid-cols-3  md:auto-rows-min gap-8 mt-20'>
        <div className='animate-pulse md:col-span-2 md:row-start-1 flex flex-col   w-full rounded-lg  bg-cover bg-center bg-no-repeat h-32 md:h-64 p-6 items-center justify-center bg-neutral-700'>
            <PulseLoader color='#ffffff' size={10} />
            <p className='text-neutral-300 mt-3'>Loading...</p>
        </div>
        <div className='h-16  w-full md:col-span-2 md:row-start-2 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows md:h-32 rounded-lg '>
            <div className='animate-pulse flex-1 bg-neutral-700 p-3 rounded-lg flex flex-col space-y-6 border border-neutral-700'>
                <p className='text-neutral-200 text-sm'>Feels Like</p>
                <p className='text-neutral-0 text-2xl font-bold'>
                    --
                </p>
            </div>
            <div className='animate-pulse flex-1 bg-neutral-700 p-3 rounded-lg flex flex-col space-y-6 border border-neutral-700'>
                <p className='text-neutral-200 text-sm'>Humidity</p>
                <p className='text-neutral-0 text-2xl font-bold'>
                    --
                </p>
            </div>
            <div className='animate-pulse flex-1 bg-neutral-700 p-3 rounded-lg flex flex-col space-y-6 border border-neutral-700'>
                <p className='text-neutral-200 text-sm'>Wind</p>
                <p className='text-neutral-0 text-2xl font-bold'>
                    --
                </p>
            </div>
            <div className='animate-pulse flex-1 bg-neutral-700 p-3 rounded-lg flex flex-col space-y-6 border border-neutral-700'>
                <p className='text-neutral-200 text-sm'>Percipitation</p>
                <p className='text-neutral-0 text-2xl font-bold'>
                    --
                </p>
            </div>
        </div>
        <div className=' h-1   w-full md:col-span-2 md:row-start-3 flex  flex-col space-y-3  rounded-lg md:h-32'>
            <p className='text-neutral-200  text-base text-start font-bold '>
             Daily forcast
            </p>
            <div className='flex flex-wrap gap-4 items-center justify-center md:justify-start'>
                <div className='flex-1 h-16 bg-neutral-700 p-3 flex flex-col  space-y-3 items-center justify-center rounded-lg animate-pulse'></div>
                <div className='flex-1 h-16 bg-neutral-700 p-3 flex flex-col  space-y-3 items-center justify-center rounded-lg animate-pulse'></div>
                <div className='flex-1 h-16 bg-neutral-700 p-3 flex flex-col  space-y-3 items-center justify-center rounded-lg animate-pulse'></div>
                <div className='flex-1 h-16 bg-neutral-700 p-3 flex flex-col  space-y-3 items-center justify-center rounded-lg animate-pulse'></div>
                <div className='flex-1 h-16 bg-neutral-700 p-3 flex flex-col  space-y-3 items-center justify-center rounded-lg animate-pulse'></div>
                <div className='flex-1 h-16 bg-neutral-700 p-3 flex flex-col  space-y-3 items-center justify-center rounded-lg animate-pulse'></div>
                <div className='flex-1 h-16 bg-neutral-700 p-3 flex flex-col  space-y-3 items-center justify-center rounded-lg animate-pulse'></div>
            </div>
        </div>
        <div className=' md:h-full bg-neutral-700 md:col-start-3 md:row-span-3 flex flex-col p-4 rounded-lg space-y-6'>
            <div className='flex justify-between'>
                <p className='text-neutral-200 text-base font-bold'>
                    Hourly forcast
                </p>
                <div className='p-2 bg-neutral-600 flex flex-row items-center space-x-2 rounded-lg'>
                    <p className='text-neutral-200 text-sm  font-bold'>
                        -
                    </p>
                    <img src={dropDownIcon} alt="" className='h-3 w-3'/>
                </div>
            </div>

            <div className='h-full overflow-y-auto space-y-3'>
                <div className='animate-pulse h-16 bg-neutral-600 p-2 flex justify-between items-center w-full border border-neutral-600 rounded-lg'></div>
                <div className='animate-pulse h-16 bg-neutral-600 p-2 flex justify-between items-center w-full border border-neutral-600 rounded-lg'></div>
                <div className='animate-pulse h-16 bg-neutral-600 p-2 flex justify-between items-center w-full border border-neutral-600 rounded-lg'></div>
                <div className='animate-pulse h-16 bg-neutral-600 p-2 flex justify-between items-center w-full border border-neutral-600 rounded-lg'></div>
                <div className='animate-pulse h-16 bg-neutral-600 p-2 flex justify-between items-center w-full border border-neutral-600 rounded-lg'></div>
                <div className='animate-pulse h-16 bg-neutral-600 p-2 flex justify-between items-center w-full border border-neutral-600 rounded-lg'></div>
                <div className='animate-pulse h-16 bg-neutral-600 p-2 flex justify-between items-center w-full border border-neutral-600 rounded-lg'></div>
            </div>
        </div>
    </div>
  )
}

export default LoadingSkeleton