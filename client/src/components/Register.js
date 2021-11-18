import React, { useState } from 'react';
import auth from '../tools/auth';
import apiService from './../ApiService';

const initialState = {
  email: '',
  pw: '',
  firstName: '',
  lastName: '',
  image: '',
  type: 'client',
  city: '',
};

const Register = (props) => {
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

    const creationDate = Date.now()
    const { email, pw, firstName, lastName, image, type, city } = state;
    const user = { email, pw, firstName, lastName, image, type, city, creationDate };
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
      !state.email || !state.pw || !state.firstName || !state.lastName
    );
  };

  return (
    <div>
      <h2>Register a client account</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name@mail.com"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="pw"
          placeholder="supersecretpassword"
          name="pw"
          value={state.pw}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="last Name"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="picture"
          name="image"
          value={state.image}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="city or town"
          name="city"
          value={state.city}
          onChange={handleChange}
        />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Register&nbsp;
        </button>
      </form>
      <p>Already have an account? <a href='/'>click here!</a></p>
      <p>Are you a <b>professional?</b> <a href='/registerProf'>click here!</a></p>
    </div>
  );
};

export default Register;
