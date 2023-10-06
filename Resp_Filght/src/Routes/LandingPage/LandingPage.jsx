import React from 'react';
import Navbar from "../../Components/NavBar/00Navbar";
import Hero from '../../Components/Hero/Hero';
import Destination from '../../Components/Destination/Destination';
import Footer from "../../Components/Footer/Footer"


export default function LandingPage() {
  return (
    <div>
      <Navbar/>
      <Hero
        cName="hero"
        heroImg="src\img\FL_homee.jpg"
        title="Your Wings to Wanderlust"
        text="Book Your Flight Today...!"
        btnText="BOOK NOW"
        url="/login"
      />
      <Destination/>
      <Footer/>
    </div>
  );
}
