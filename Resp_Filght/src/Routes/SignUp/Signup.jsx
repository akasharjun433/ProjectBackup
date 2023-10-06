import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    address: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    // const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];

    // // Check if the user with the same email already exists
    // const isExistingUser = existingUsers.find((user) => user.email === formData.email);
    const user = {
      firstname: formData.firstName,
      lastname: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      address: formData.address,
      email: formData.email,
      password: formData.password
    }

    const requestbody = 
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }

    //const isExistingUser=0;

    const response = await fetch("http://localhost:8082/signup",requestbody)
    const responsedata = await response.text()
    console.log(responsedata)
    if (responsedata==="Exists") {
      alert('User with the same email already exists!');
    } else {
      // Add the new user data to the array
      // existingUsers.push(formData);
      // localStorage.setItem('userData', JSON.stringify(existingUsers));
      alert('Registration successful!');
      setFormData({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        address: '',
        email: '',
        password: '',
      });
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2 className="welcome-text">Registration</h2>
        <form onSubmit={handleSignup}>
          <div className="formGroup">
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                style={{ marginBottom: "10px" }}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="formGroup">
            <div >
              <input className='age1'
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
              />
              <select
                style={{ width: "138px" }}
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="formGroup">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="formGroup">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="formGroup">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
        <div className="toggle-section">
          <p className="toggle-text">Already have an account?</p>
          <br />
          <button
            type="button"
            className="toggle-button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>

  );
};

export default Signup;
