import React from 'react'
import Body from './assets/body'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Body />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
