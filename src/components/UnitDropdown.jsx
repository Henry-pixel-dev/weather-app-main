import React from 'react'

const UnitDropdown = ({unit, setUnit}) => {
    console.log('unit:', unit)
    console.log('setUnit:', setUnit)
  return (
    <div className='bg-neutral-800 p-3 border border-neutral-700 rounded-lg flex flex-col space-y-5'>
        <button className='border-none text-base text-neutral-0 font-bold'
        onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}>
            Switch to {unit === 'metric' ? 'Imperial' : 'Metric'}
        </button>

        <div className='pb-3 border-b border-neutral-600 w-full'>
            <p className='text-sm font-bold text-neutral-300 mb-3'>
                Temperature
            </p>
            <div className='flex flex-col space-y-3'>
                <label className='p-2 flex items-start  cursor-pointer'>
                    <input 
                        type='radio' 
                        name='temperature' 
                        value='celsius'
                        checked={unit === 'metric'}
                        onChange={() => setUnit('metric')}
                        className='hidden'  // hide default radio style
                    />
                    <p className='text-neutral-0'>
                       Celsius (°C)
                    </p>
                </label>
                <label className='p-2 flex items-start  cursor-pointer'>
                    <input 
                        type='radio' 
                        name='temperature' 
                        value='fahrenheit'
                        checked={unit === 'imperial'}
                        onChange={() => setUnit('imperial')}
                        className='hidden'  // hide default radio style
                    />
                    <p className='text-neutral-0'>
                       Fahrenheit (°F)
                    </p>
                </label>
            </div>
        </div>
        <div className='pb-3 border-b border-neutral-600 w-full'>
            <p className='text-sm font-bold text-neutral-300 mb-3'>
                Wind Speed
            </p>
            <div className='flex flex-col space-y-3'>
                <label className='p-2 flex items-start  cursor-pointer'>
                    <input 
                        type='radio' 
                        name='wind' 
                        value='km/h'
                        checked={unit === 'metric'}
                        onChange={() => setUnit('metric')}
                        className='hidden'  // hide default radio style
                    />
                    <p className='text-neutral-0'>
                       km/h
                    </p>
                </label>
                <label className='p-2 flex items-start  cursor-pointer'>
                    <input 
                        type='radio' 
                        name='wind' 
                        value='mph'
                        checked={unit === 'imperial'}
                        onChange={() => setUnit('imperial')}
                        className='hidden'  // hide default radio style
                    />
                    <p className='text-neutral-0'>
                       mph
                    </p>
                </label>
            </div>
        </div>
        <div className='pb-3 border-b border-neutral-600 w-full'>
            <p className='text-sm font-bold text-neutral-300 mb-3'>
                Percipitation
            </p>
            <div className='flex flex-col space-y-3'>
                <label className='p-2 flex items-start  cursor-pointer'>
                    <input 
                        type='radio' 
                        name='percipitation' 
                        value='millimeters'
                        checked={unit === 'metric'}
                        onChange={() => setUnit('metric')}
                        className='hidden'  // hide default radio style
                    />
                    <p className='text-neutral-0'>
                       Millimeters (mm)
                    </p>
                </label>
                <label className='p-2 flex items-start  cursor-pointer'>
                    <input 
                        type='radio' 
                        name='percipitation' 
                        value='inches'
                        checked={unit === 'imperial'}
                        onChange={() => setUnit('imperial')}
                        className='hidden'  // hide default radio style
                    />
                    <p className='text-neutral-0'>
                       Inches (in)
                    </p>
                </label>
            </div>
        </div>
    </div>
  )
}

export default UnitDropdown