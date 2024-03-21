import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
function Nav() {
  return (
    <div className=' sm:flex flex  sm:gap-[300px] justify-around sm:bg[#131314] bg-[#131314] text-[#FFFFFF] sm:mx-[50px] sm:my-5 my-5 items-center '>
       <div className='sm:hidden '>
      <button className=' text-2xl mt-2 mr-[-50px]'><GiHamburgerMenu/></button>
      </div>
      <div className='sm:text-[35px] text-[23px]   mr-[80px]'>
      Gemini
      </div>
      <div className='sm:flex sm:gap-[20px] flex gap-[20px]  items-center '>
        <p className='sm:text-[20px] sm:mt-[3px] text-[18px] '>5 Tokens left!</p>
        <div className='sm:w-[40px] sm:h-[40px] sm:rounded-full bg-white w-[36px] h-[36px] rounded-full'></div>
      </div>
     
    </div>
  )
}

export default Nav