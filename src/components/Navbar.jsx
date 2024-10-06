import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-blackperal text-white h-12 text-l items-center px-3 py-8'>
        <div className="logo">
            <span className="text-3xl font-bold mx-6 flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#ffffff" fill="none">
    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
            TickIt
            </span>
        </div>
        <ul className='flex gap-10 mx-6'>
            <li className='cursor-pointer hover:font-semibold transition-all duration-300'>Home</li>
            <li className='cursor-pointer hover:font-semibold transition-all duration-300'>Your Task</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
