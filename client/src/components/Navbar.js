import React from 'react';
import { Link } from 'react-router-dom'
import {
  HiUserCircle,
  HiLogout,
  HiSearch,
} from "react-icons/hi";
import GoFillyLogo from '../GoFillyApp.png'


const Navbar = ({ isAuthenticated, isPro }) => {

  if (isPro === "prof") {
    return (
      <div className="navbar">
      <ul>
        <React.Fragment>
            <li>
              <Link to="/profile">
                <HiUserCircle style={{fill: 'white'}}/>
                </Link>
            </li>
            <li>
              <Link to="/logout"> <HiLogout style={{fill: 'white'}}/></Link>
            </li>
          </React.Fragment>
        </ul>
      </div>
    )
  }

  if (isPro === "client") {
    return (
      <div className="navbar">

      <ul>
      <React.Fragment>
            <li>
              <Link to="/profFilter"><HiSearch style={{fill: 'white'}}/></Link>
            </li>
            <li>
              <Link to="/profile"><HiUserCircle style={{fill: 'white'}}/></Link>
            </li>
            <li>
              <Link to="/logout"><HiLogout style={{fill: 'white'}}/></Link>
            </li>
          </React.Fragment>
        </ul>
      </div>
    )
  }
  else {
    return (
      <div className="logo_navbar">
        <img src={GoFillyLogo} height="150" alt="logo"/>
      </div>
    )
  }

};

export default Navbar;
