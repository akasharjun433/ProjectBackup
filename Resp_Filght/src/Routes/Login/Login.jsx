import React, { useState } from 'react';
import "../SignUp/Signup.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    }

    const requestbody = 
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }

    //const isExistingUser=0;

    const response = await fetch("http://localhost:8082/login",requestbody)
    const responsedata = await response.text()
    console.log(responsedata)
    if (responsedata==="Not Authorized") {
      window.alert('Invalid email or password')
    } else {
      navigate("/home", { state:  {user}  });
      window.alert('Login successful!');
        setEmail("")
        setPassword("")
    }
  };
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="welcome-text">Welcome</h2>
        <form onSubmit={handleLogin}>
          <div className="formGroup">
            <input
          
              type="email"
              placeholder="Email"
              value={email}
              
              className="fieldW"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <input
           
              type="password"
              placeholder="Password"
              value={password}
              className="fieldW"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="toggle-section">
          <p className="toggle-text">Don't have an account?</p><br/>
          <button
            type="button"
            className="toggle-button"
            onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
