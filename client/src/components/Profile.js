import React, { useEffect, useState } from 'react';
import ApiService from './../ApiService';
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  image: '',
};

const Profile = () => {
  const [state, setState] = useState(initialState);

  const firstName = state.firstName || 'Missing';
  const lastName = state.lastName || 'No.';
  const email = state.email || 'No.';
  const city = state.city || 'No.';
  const image = state.image || 'No image available';


  useEffect(() => {
    const getProfile = async () => {
      const userInfo = await ApiService.profile();
      if (userInfo) {
        const { firstName, lastName, email, city, image } = userInfo;
        setState((prevState) => {
          return {
            ...prevState,
            firstName,
            lastName,
            email,
            city,
            image
          };
        });
      } else {
        console.log('No user info found 😞');
      }
    };
    getProfile();
  }, []);

  return (
    <div>
      <div className="profile_header">
      <h2 className="profile_header">My Profile</h2>
      <h3 className="profile_header">
        Welcome back, {firstName} {lastName}!
      </h3>
      </div>
      <div className="profile_pic">

      <img src={image} height="100" className="profile_pic" alt="profile"/>
      </div>
      <p>{email}</p>
      <p>{city}</p>
    </div>
  );
};

export default Profile;
