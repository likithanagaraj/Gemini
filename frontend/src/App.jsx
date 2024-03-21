import React from 'react'
import Home from './page/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App_Chart from './page/App_Chart'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={''}></Route>
      <Route path='/app' element={<App_Chart/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App