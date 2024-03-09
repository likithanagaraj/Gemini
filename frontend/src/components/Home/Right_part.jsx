import React from 'react'
import Nav from './Nav'
import Prompt from './Prompt'

export default function Right_part() {
  return (
    <div className='bg-[#131314] w-full h-[730px] flex flex-col gap-[480px]'>
      <Nav/>
      <Prompt/>
    </div>
  )
}
