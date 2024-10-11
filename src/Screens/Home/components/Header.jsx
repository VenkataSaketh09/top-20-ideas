import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Header() {
  const navigation=useNavigate();
  return (
    <div className='flex  justify-between items-center shadow-lg p-4 border rounded-xl'>
      {/* <Link to='/new'> */}
        <button className="btn glass btn-sm md:btn-md text-[30px]" onClick={()=>navigation('/new')}>Click Me</button>
        {/* </Link> */}
        <h2 className='font-bold text-sm md:text-2xl'>Top 20 Ideas</h2>
        <div className='flex gap-2 items-center'>
            <img src="/logoipsum.svg" alt="logo" className='w-10 h-10 ' />
            <h2 className='text-sm font-bold hidden md:block'>By <br></br>Saketh Sharma</h2>
        </div>
    </div>
  )
}

export default Header