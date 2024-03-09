import React from 'react'

function Nav() {
  return (
    <div className='sm:flex flex  sm:justify-between justify-around sm:bg[#131314] bg-[#131314] text-[#FFFFFF] mx-9 my-5'>
      <div className='text-[35px] flex items-center justify-center'>
      Gemini
      </div>
      <div className='flex gap-[20px]'>
        <p className='text-[20px] mt-[3px]'>5 Tokens left!</p>
        <div className='w-[40px] h-[40px] rounded-full bg-white'></div>
      </div>
    </div>
  )
}

export default Nav