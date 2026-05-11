import React from 'react';
import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import settingIcon from '../assets/images/icon-units.svg';
import dropDownIcon from '../assets/images/icon-dropdown.svg';
import UnitDropdown from '../components/UnitDropdown'

const NavBar = ({unit, setUnit}) => {
  const [dropDown, setdropDown] = useState(false)

  const handleDrop =  () => {
        setdropDown(!dropDown)
    }

  return (
    <nav className='container mx-auto flex items-center justify-between py-4'>
        <img src={logo} alt="Logo" />
        <div className='relative'>
          <div  className='bg-neutral-700 p-3 rounded-lg flex flex-row space-x-1 items-center justify-around'
          onClick={handleDrop}
          >
              <img src={settingIcon} alt="" className='h-5 w-5'/>
              <p className='text-neutral-200'>Units</p>
              <img src={dropDownIcon} alt="" className='h-5 w-5'/>
          </div>

        
          {dropDown && (
            <div className='absolute top-full right-0 mt-4 z-8  w-64 '>
                  <UnitDropdown  setUnit={setUnit} unit={unit}/>  
            </div>
          )}
        </div>
    </nav>
  )
}

export default NavBar