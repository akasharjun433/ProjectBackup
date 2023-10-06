import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home/Home'
import Service from './Routes/Service/Service'
import About from './Routes/About/About'
import Contact from './Routes/Contact/Contact'
import Signup from './Routes/SignUp/Signup'
import Login from './Routes/Login/Login'
import LandingPage from './Routes/LandingPage/LandingPage'
import FlightSearch from './Routes/FlightsPage/FlightSearch'
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/flight-booking" element={<FlightSearch />} />
      </Routes>

    </div>
  )
}

export default App
