import React from 'react'
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";
function Prompt() {
  return (
    <div className='text-[#FFFFFF]'>
      <div className='w-[800px] bg-[#1E1F20] ml-[200px] px-5 pb-4 pt-4 rounded-xl flex ' >
        <div>
          <input className='text-xl w-[800px] outline-none bg-[#1E1F20]' type="text" placeholder='Enter your Prompt here'/>
        </div>
        <div className='flex gap-5 ml-[-120px]'>
          <button><MdOutlineKeyboardVoice className='text-3xl' /></button>
          <button><LuSendHorizonal className='text-2xl' /></button>
        </div>
      </div>
    </div>
  )
}

export default Prompt