import React from 'react';
import Navbar from '../../Components/NavBar/00Navbar';
import HeroCopy from '../../Components/Hero/HeroCopy';
import Footer from '../../Components/Footer/Footer';
import './Contact.css'; // Import the Contact stylesheet

export default function Contact() {
  return (
    <div>
      <Navbar />
      <HeroCopy
        cName="hero-mid"
        heroImg="src\img\d6.jpg"
        title="Contact Us"
      />
      <div className="contact-info">
        <div className="container">
          <h2>Contact Information</h2>
          <p>If you have any questions or need assistance with your flight bookings, feel free to reach out to us. Our dedicated team is here to help you.</p>
          <ul>
            <li><strong>Email:</strong> info@wanderlust.com</li>
            <li><strong>Phone:</strong> +1 (123) 456-7890</li>
            <li><strong>Address:</strong> 1234 Flight Avenue, Travel City, TC 56789</li>
          </ul>
          <p>Connect with us on social media for the latest updates and travel tips:</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
