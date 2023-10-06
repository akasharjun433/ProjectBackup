import React, { useState } from 'react';
import "../NavbarLanding/NavbarLanding.css"
import { Link } from 'react-router-dom';
import { Menuitems } from '../Menuitems/02Menuitems';


const NavbarLanding = (props) => {
  const [clicked, setClicked] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const initialProfileDetails = {
    name: props.props.name || '',
    email: props.props.email || '',
    age: props.props.age || '',
    address: props.props.address || '',
  };

  const [profileDetails, setProfileDetails] = useState(initialProfileDetails);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails({
      ...profileDetails,
      [name]: value,
    });
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleProfileClick = () => {
    setShowProfileCard(!showProfileCard);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Update local storage or make API calls here with updated data if needed
    setIsEditing(false);
  };

  return (
    <div>
      <nav className="NavbarItems">
        <h1>
          <Link to="/" className="navbar-logo">
            WanderLust!
          </Link>
        </h1>

        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {Menuitems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}

          {/* Profile option */}
          <li>
            <button className="nav-links" onClick={handleProfileClick}>
              <i className="fas fa-user"></i>Profile
            </button>
          </li>
        </ul>
      </nav>

      {/* Profile card */}
      {showProfileCard && (
        <div className={`profile-card ${isEditing ? 'editing' : ''}`}>
          {isEditing ? (
            <div>
              <div className="profile-row">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={profileDetails.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-row">
                <label>Email:</label>
                <input
                  type="text"
                  name="email"
                  disabled="true"
                  value={profileDetails.email}
                />
              </div>
              <div className="profile-row">
                <label>Age:</label>
                <input
                  type="text"
                  name="age"
                  value={profileDetails.age}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-row">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={profileDetails.address}
                  onChange={handleInputChange}
                />
              </div>
              <button className="edit-button" onClick={handleSaveClick}>
                Save Changes
              </button>
            </div>
          ) : (
            <div>
              <div className="profile-row">
                <p>Name:</p>
                <p>{profileDetails.name}</p>
              </div>
              <div className="profile-row">
                <p>Email:</p>
                <p>{profileDetails.email}</p>
              </div>
              <div className="profile-row">
                <p>Age:</p>
                <p>{profileDetails.age}</p>
              </div>
              <div className="profile-row">
                <p>Address:</p>
                <p>{profileDetails.address}</p>
              </div>
              <button onClick={handleEditClick}>Edit</button>
            </div>
          )}

          <button onClick={handleProfileClick}>Close</button>
        </div>
      )}
    </div>
  );
};

export default NavbarLanding;
