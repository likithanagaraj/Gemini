import { Context } from '@/context/Context'
import React, { useContext } from 'react'
import { FaRegMessage } from "react-icons/fa6";

function Group1() {
  const {onSent,prevPrompt,setrecentPrompt} = useContext(Context)
  return (
    <div className=' sm:ml-[25px] sm:mt-[50px] text-[rgb(163,160,160)] '  >
      {prevPrompt.map((e,i)=>{
        return(
          <div className='sm:flex sm:items-center sm:gap-3'>
            <div className=''><FaRegMessage/></div>
            <div className='text-[17px]'>{e}</div>
          </div>
          
        )
      })}
      
  
      
      </div>
  )
}

export default Group1