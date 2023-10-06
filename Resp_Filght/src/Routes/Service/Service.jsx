import React from 'react'
import Navbar from "../../Components/NavBar/00Navbar"
import HeroCopy from '../../Components/Hero/HeroCopy'
import Footer from '../../Components/Footer/Footer'
import './Service.css'
export default function Service() {
  return (
    <div>
      <Navbar/>
      <HeroCopy
      cName="hero-mid"
      heroImg="src\img\f23.jpg"
      title ="Service"
      style={{ color: "black" }}
      />
      <div className='from-container'>
        <h1>Send a message to us!</h1>
        <form>
          <input placeholder='Name'/>
          <input placeholder='Email'/>
          <input placeholder='Subject'/>
          <textarea placeholder='Message' rows='4'></textarea>
          <button>Send Message</button>
        </form>
      </div>
      <Footer/>
      </div>
  )
}
