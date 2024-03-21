import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Newchart_btn from './Newchart_btn';
import Group1 from './Group1';
import Group2 from './Group';
export default function Left_part() {
  return (
    <div className='font-Poppins sm:h-[730px] sm:w-[300px] bg-[#1E1F20] text-[#FFFFFF] sm:flex sm:flex-col hidden sm:pt-2 '>
      <div>
        <button className='sm:text-3xl sm:ml-[25px] sm:mt-3'><GiHamburgerMenu/></button>
      </div>
      <Newchart_btn/>
      <Group1/>
      <Group2/>
    </div>

  )
}
