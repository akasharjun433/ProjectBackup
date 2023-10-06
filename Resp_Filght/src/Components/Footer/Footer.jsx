import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='left'>
          <div className='title'>
            <h1>WanderLust!</h1>
            <p>Look Now & Book Now</p>
          </div>
          <div className='underline'></div>
        </div>
      </div>
      <div className='bottom'>
        <div className='details'>
          <h4>Contact Us</h4>
          <p>123 Main Street</p>
          <p>City, Country</p>
          <p>Email: info@wl.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className='details'>
          <h4>Quick Links</h4>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/service">Services</a>

        </div>
        <div className='social-media'>
          <a href='/'>
            <i className='fa-brands fa-facebook-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-instagram-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-twitter-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-git-square'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
