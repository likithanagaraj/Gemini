import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";

import { Context} from '../../context/Context'

function Prompt() {
  const {onSent,recentPrompt,input,setinput,resultDate} = useContext(Context)
 
  return (
    <div className='text-[#FFFFFF] sm:ml-[10px] sticky'>
      <div className='sm:w-[880px] bg-[#1E1F20] sm:ml-[150px] sm:px-5 sm:pb-4 sm:pt-4 sm:rounded-xl sm:flex  w-[450px] ml-[20px] px-3 pb-3 pt-3 rounded-xl flex gap-[50px]' >
        <div>
          <input value={input} onChange={(e)=>setinput(e.target.value)} className='sm:text-xl sm:w-[820px] sm:outline-none bg-[#1E1F20] text-[18px] w-[300px] outline-none' type="text" placeholder='Enter your Prompt here'/>
        </div>
        <div className='sm:flex sm:gap-7 sm:ml-[-120px] flex gap-3 '>
          <button><MdOutlineKeyboardVoice className='sm:text-3xl text-3xl' /></button>
          <button onClick={()=>onSent()}  ><LuSendHorizonal className='sm:text-2xl text-2xl' /></button>
        </div>
      </div>
    </div>
  )
}
    
export default Prompt
// export {Prompt ,data2 ,setdata2}