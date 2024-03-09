import React from 'react'
import Home from './page/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={''}></Route>
      <Route path='/app' element={'/'}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App