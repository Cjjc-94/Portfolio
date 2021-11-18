import React from 'react';
import auth from '../tools/auth';
import apiService from './../ApiService';
import { Link } from 'react-router-dom';
import {
  HiCheck,
  HiX
} from "react-icons/hi";

const Logout = (props) => {
  const handleClick = () => {
    apiService.logout();
    handleAuth();
  };

  const handleAuth = () => {
    props.setIsAuthenticated(false);
    auth.logout(() => props.history.push('/'));
  };

  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <Link to="/">
        <button className="confirm-btn"><HiX fill="white"></HiX></button>
      </Link>
      <button className="confirm-btn" onClick={() => handleClick()}>
        <HiCheck fill="white"></HiCheck>
      </button>
    </div>
  );
};

export default Logout;
