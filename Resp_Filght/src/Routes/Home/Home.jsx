import React from 'react';
import NavbarLanding from "../../Components/NavbarLanding/NavbarLanding"
import Hero from '../../Components/Hero/Hero';
import Destination from '../../Components/Destination/Destination';
import Footer from '../../Components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import FAQ from '../../Components/FAQ/FAQ';
const Home = () => {
  const location = useLocation();
  // console.log(location)
  //console.log(location.state.user.firstName)
  // console.log(location.state.user.email)
  // console.log(location.state.user.age)
  // console.log(location.state.user.address)
  return (
    <div>
      <NavbarLanding props={{name:`${location.state.user.firstName}`, age:`${location.state.user.age}`,email:`${location.state.user.email}`, address:`${location.state.user.address}`}}/>
      <Hero
        cName="hero"
        heroImg="src\img\FL_homee.jpg"
        title="Your Wings to Wanderlust"
        text="Book Your Flight Today...!"
        btnText="BOOK NOW"
        url="/flight-booking"
      />
      {/* <div>{location.state.user.firstName}{location.state.user.age}{location.state.user.email}{location.state.user.address}</div> */}
      <Destination />
      <FAQ/>
      <Footer />
    </div> 
  )
}

export default Home