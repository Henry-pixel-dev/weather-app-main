import React from 'react'
import ErrorIcon from '../assets/images/icon-error.svg'
import RetryIcon from '../assets/images/icon-retry.svg'


const ErrorsPage = () => {
  return (
    <div className='min-h-screen flex flex-col justify- items-center space-y-6'>
      <img src={ErrorIcon} alt="ErrorICon"  className='w-20 h-20'/>
      <h1 className='text-neutral-0 text-5xl  font-bold'>
        Something went wrong
      </h1>
      <p className='max-w-md text-white text-base text-center'>
        We couldn't connect to the server (Api error). Please try again in a few moment.
      </p>

      <button className='bg-neutral-700 text-neutral-200 flex flexl-row items-center justify-around space-x-2 p-3 rounded-lg'>
        <img src={RetryIcon} alt="retryIcon" className='w-5 h-5' />
        <span className='text-neutral-0'>
          Retry
        </span>
      </button>
    </div>
  )
}

export default ErrorsPage