import React from 'react'

export default function Logo() {
  return (
    <div className='flex flex-row justify-center items-center transition-all hover:-translate-y-1'>
      <a href='#' className='w-10'>
        <img src='/img/Logo.png' alt="Logo"/>
      </a>
      <a href='#' className=' text-white font-bold montserrat  mx-3 text-xl'>
          MineMaps
      </a>
    </div>
  )
}
