import React from 'react'
import karasLogo from '../assets/images/karas_logo.svg'

function Foot() {
  return (
    <div className='w-full h-16 flex flex-col items-center justify-center mx-5'>
      <div>
        <img src={karasLogo} alt='logo' className="h-10 w-auto"/>
      </div>
      <div className='text-gray-500 text-sm'>
        <p>Copyright © 2025 KARAS Design Studio. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Foot