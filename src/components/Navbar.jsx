import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-blackperal text-white h-12 text-l items-center px-3 py-8'>
        <div className="logo">
            <span className="text-3xl font-bold mx-6 flex gap-3">
                <img src="src\assets\wtick.svg" alt="tick" />
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
