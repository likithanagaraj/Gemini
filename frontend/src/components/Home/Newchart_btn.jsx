import App from '@/App'
import App_Chart from '../../page/App_Chart'
import React from 'react'
import { Link } from 'react-router-dom'

function Newchart_btn() {
  return (
    <Link to='/app'   className='ml-[25px] mt-[100px]'><button   className='w-[120px]  rounded-lg  h-[35px] bg-[#393B3D] text-[#FFFFFF]'>+ New chart</button></Link >
  )
}

export default Newchart_btn