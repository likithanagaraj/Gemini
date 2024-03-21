import React from 'react'
import Nav from '../Home/Nav'
import Chart from '../Home/Chart'
import Prompt from '../Home/Prompt'
function Right_part2() {
  return (
    <div className='bg-[#131314] w-full sm:w-full sm:h-[730px] h-[728px] sm:flex sm:flex-col  sm:gap-[48px] flex flex-col gap-[530px]'>
    <Nav/>
    <Chart/>
    <Prompt/>
  </div>
  )
}

export default Right_part2