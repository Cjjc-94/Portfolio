import React, { useState } from 'react';
import auth from '../tools/auth';
import apiService from './../ApiService';

const initialState = {
  email: '',
  pw: '',
  firstName: '',
  lastName: '',
  image: '',
  phone: '',
  type: 'prof',
  city: '',
  profession: '',
  website: '',
  description: '',
  experience: '',
  education: '',
};

const RegisterProf = (props) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email,
      pw,
      firstName,
      lastName,
      image,
      phone,
      type,
      city,
      profession,
      website,
      description,
      experience,
      education,
       } = state;
    const user = {
      email,
      pw,
      firstName,
      lastName,
      image,
      phone,
      type,
      city,
      profession,
      website,
      description,
      experience,
      education
    };
    const res = await apiService.register(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      props.setIsAuthenticated(true);
      auth.login(() => props.history.push('/profile'));
    }
  };

  const validateForm = () => {
    return (
      !state.email || !state.pw || !state.firstName || !state.lastName || !state.profession
    );
  };

  return (
    <div>
      <h2>Register Professional account</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="register_label">email:</label>
        <input
          type="text"
          placeholder=""
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <label className="register_label">password:</label>
        <input
          type="pw"
          placeholder=""
          name="pw"
          value={state.pw}
          onChange={handleChange}
        />
        <label className="register_label">first name:</label>
        <input
          type="text"
          placeholder=""
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
        <label className="register_label">last name:</label>
        <input
          type="text"
          placeholder=""
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
        <label className="register_label">profile picture:</label>
        <input
          type="text"
          placeholder=""
          name="image"
          value={state.image}
          onChange={handleChange}
        />
        <label className="register_label">phone number:</label>
        <input
          type="text"
          placeholder=""
          name="phone"
          value={state.phone}
          onChange={handleChange}
        />
        <label className="register_label">city or town:</label>
        <input
          type="text"
          placeholder=""
          name="city"
          value={state.city}
          onChange={handleChange}
        />
        <label className="register_label">profession:</label>
        <select
          name="profession"
          value={state.profession}
          onChange={handleChange}>
            <option value="Default">Select a profession</option>
            <option value="Veterinarian">Veterinarian</option>
            <option value="Farrier">Farrier</option>
            <option value="Dentist">Dentist</option>
            <option value="Physical therapist">Physical therapist</option>
            <option value="Trainer">Trainer</option>
            <option value="Bit fitter">Bit fitter</option>
            <option value="Saddle fitter">Saddle fitter</option>
            <option value="Paramedical care">Paramedical care</option>
            <option value="Other">Other</option>
        </select>
        <label className="register_label">website:</label>
        <input
          type="text"
          placeholder=""
          name="website"
          value={state.website}
          onChange={handleChange}
        />
        <label className="register_label">activities/specialties:</label>
        <textarea
          type="text"
          placeholder="describe your main activities"
          name="description"
          value={state.description}
          onChange={handleChange}
          height="300px "
          rows="4"
        />
        <label className="register_label">experience in years:</label>
        <input
          type="text"
          placeholder=""
          name="experience"
          value={state.experience}
          onChange={handleChange}
        />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Register&nbsp;
        </button>
      </form>
      <p>Already have an account? <a href='/'>click here!</a></p>
      <p>Are you not a professional? <a href='/register'>click here!</a></p>
    </div>
  );
};

export default RegisterProf;
