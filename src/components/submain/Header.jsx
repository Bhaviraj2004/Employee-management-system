import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between mt-8'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Bhaviraj singh 👋</span></h1>
        <button className='bg-red-500 text-lg font-medium py-2 px-5 rounded-lg hover:bg-red-600'>Log Out</button>
    </div>
  )
}

export default Header