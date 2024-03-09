import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Newchart_btn from './Newchart_btn';
import Group1 from './Group1';
import Group2 from './Group';
export default function Left_part() {
  return (
    <div className='font-Poppins h-[730px] w-[380px] bg-[#1E1F20] text-[#FFFFFF] flex flex-col  pt-2'>
      <div>
        <button className='text-3xl ml-[20px]'><GiHamburgerMenu/></button>
      </div>
      <Newchart_btn/>
      <Group1/>
      <Group2/>
    </div>

  )
}
