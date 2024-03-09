import Nav from '@/components/Home/Nav'
import React from 'react'
import Left_part from '../components/Home/Left_part'
import Right_part from '../components/Home/Right_part'
function Home() {
  return (
    <div className='sm:flex font-Poppins'>
      <Left_part/>
      <Right_part/>
    </div>
  )
}

export default Home