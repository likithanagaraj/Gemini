import React, { useContext } from 'react'
import Nav from './Nav'
import Prompt from './Prompt'
import Chart from './Chart'
import { FaCompass } from "react-icons/fa6";
import { TiLightbulb } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import { MdOutlineImageSearch } from "react-icons/md";
import { Context } from '@/context/Context';
import { FaRegCircleUser } from "react-icons/fa6";
import ReactMarkdown from 'react-markdown';

export default function Right_part() {
  

  return (
    <div className='bg-[#131314] w-full sm:w-full sm:h-[730px] h-[728px] sm:flex sm:flex-col  sm:gap-[48px] flex flex-col gap-[80px] '>
      <Nav/>
      <Dashboard/>
      <Prompt/>
    </div>
  )
}
export function Dashboard(){
  const {onSent, recentPrompt,showResult,loading,resultData, input,setinput,
    setrecentPrompt,prevPrompt,setprevPrompt, } = useContext(Context)
  return(
    <>
{!showResult ?
  <>
  <div className='sm:mb-[50px] sm:ml-[-110px] '>
  <div className='text-white sm:text-[35px] sm:flex sm:flex-col  sm:items-center sm:mr-[300px] text-[28px] flex flex-col  items-center sm:ml-[1px] ml-[-50px] '>
    <div className='sm:ml-[-256px] ml-[-205px] bg-gradient-to-r from-[rgb(109,123,223)]  via-[rgb(191,107,151)] to-[rgb(217,101,112)] inline-block text-transparent bg-clip-text sm:font-bold'>Hello, Likitha</div>
    <p className='text-[rgb(95,95,95)] sm:font-bold'> How Can i Help you Today?</p><br />
  </div>
  <div className='sm:flex sm:gap-5 sm:justify-center sm:items-center grid grid-cols-2 gap-x-3 gap-y-8 ml-8 mr-3 mb-3'>
    <div className='sm:w-[185px] sm:flex sm:justify-center  sm:h-[190px] sm:px-5 sm:pt-7 sm:pb-2  text-white bg-[rgb(30,31,32)]   sm:rounded-xl sm:flex-col sm:gap-8 flex flex-col  rounded-xl  h-[100px] justify-center gap-3  pl-3 w-[200px] hover:bg-[rgb(57,56,56)]'>
      <p>Walk me through how to apply for new Role</p>
      <div className='sm:ml-[115px] sm:text-2xl ml-[150px]'><FaCompass/></div>
    </div>
    <div className='sm:w-[185px] sm:flex sm:justify-center  sm:h-[190px] sm:px-5 sm:pt-7 sm:pb-2  text-white bg-[rgb(30,31,32)]   sm:rounded-xl sm:flex-col sm:gap-8 flex flex-col  rounded-xl  h-[100px] justify-center gap-3  pl-3 w-[200px] hover:bg-[rgb(57,56,56)]'>
      <p>Walk me through how to apply for new Role</p>
      <div className='sm:ml-[115px] sm:text-2xl ml-[150px]'><MdOutlineImageSearch/></div>
    </div>
   
    <div className='sm:w-[185px] sm:flex sm:justify-center  sm:h-[190px] sm:px-5 sm:pt-7 sm:pb-2  text-white bg-[rgb(30,31,32)]   sm:rounded-xl sm:flex-col sm:gap-8 flex flex-col  rounded-xl  h-[100px] justify-center gap-3  pl-3 w-[200px] hover:bg-[rgb(57,56,56)]'>
      <p>Walk me through how to apply for new Role</p>
      <div className='sm:ml-[115px] sm:text-2xl ml-[150px]'><TiLightbulb/></div>
    </div>
    <div className='sm:w-[185px] sm:flex sm:justify-center  sm:h-[190px] sm:px-5 sm:pt-7 sm:pb-2  text-white bg-[rgb(30,31,32)]   sm:rounded-xl sm:flex-col sm:gap-8 flex flex-col  rounded-xl  h-[100px] justify-center gap-3  pl-3 w-[200px] hover:bg-[rgb(57,56,56)]'>
      <p>Walk me through how to apply for new Role</p>
      <div className='sm:ml-[115px] sm:text-2xl ml-[150px]'><MdEdit/></div>
    </div>
  </div>
</div>
  </>
  :
  <div className='text-white sm:ml-[190px] sm:flex sm:flex-col sm:gap-5 sm:h-[400px] flex flex-col gap-5 h-[400px] text-[19px] ml-[30px] sm:max-h-[5000px] overflow-x-auto ' >
  <div className='sm:flex sm:items-center sm:gap-4 flex items-center gap-4'>
    <div className='sm:text-3xl  text-xl '><FaRegCircleUser/></div>
    <p className='sm:text-[18px]'>{recentPrompt}</p>
  </div>
  <div className='sm:flex sm:items-start sm:gap-4 flex items-start gap-2 '>
  <div><img className='sm:w-[30px] sm:h-[30px]' src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="" /></div>
    <p  className='sm:text-[17px]  sm:max-w-[700px]' ><ReactMarkdown>{resultData}</ReactMarkdown></p>
  </div>
</div>
}
    
    </>
  )
  }


  