import { useState } from 'react'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import OurApp from './pages/OurApp';
import Contacts from './pages/Contacts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />        
        <Route path="/app" element={<OurApp />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
