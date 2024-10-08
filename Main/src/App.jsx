import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import About from './pages/About'
function App() {

  return (
    <>
      <Header></Header>
      <About></About>
      <Footer></Footer>
    </>
  )
}

export default App
