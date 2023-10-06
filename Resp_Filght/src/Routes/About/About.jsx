import React from 'react';
import Navbar from '../../Components/NavBar/00Navbar'
import HeroCopy from '../../Components/Hero/HeroCopy';
import Footer from '../../Components/Footer/Footer'
import './About.css';

export default function About() {
  return (
    <div>
      <Navbar />
      <HeroCopy
        cName="hero-mid"
        heroImg="src\img\f11.jpg"
        title="About Us"
        style={{ color: "black" }}
      />
      <div className="about-us-content">
        <div className="container">
          <h2>Welcome to Our Flight Booking Adventure</h2>
          <p>
            At our flight booking website, we are passionate about connecting you with incredible destinations around the world. Our mission is to make your travel dreams a reality by providing easy access to flights, accommodation, and travel information.
          </p>
          <p>
            With a team of dedicated travel enthusiasts, we strive to offer you the best deals, a seamless booking experience, and personalized travel recommendations. Whether you're planning a weekend getaway or a journey of a lifetime, we're here to assist you every step of the way.
          </p>
          <p>
            Join us in exploring the world, one flight at a time. Your adventure begins here, and we can't wait to be a part of your travel story.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
