import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import About from './pages/About'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<About />} />
            <Route path="portfolio" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Experience />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
