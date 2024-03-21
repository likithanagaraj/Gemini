import React, { useContext } from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { Context} from '../../context/Context'
import ReactMarkdown from 'react-markdown';

function Chart() {
  const {recentPrompt,resultData} = useContext(Context)                      
  return (
    <div className='text-white sm:ml-[190px] sm:flex sm:flex-col sm:gap-5 sm:h-[400px] flex ' >
    <div className='sm:flex sm:items-center sm:gap-4'>
      <div className='sm:text-3xl'><FaRegCircleUser/></div>
      <p className='sm:text-[18px]'>{recentPrompt}</p>
    </div>
    <div className='sm:flex sm:items-start sm:gap-4'>
    <div><img className='sm:w-[30px] sm:h-[30px]' src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="" /></div>
      <p  className='sm:text-[17px]  sm:max-w-[700px]' ><ReactMarkdown>{resultData}</ReactMarkdown></p>
    </div>
  </div>
  )
}

export default Chart