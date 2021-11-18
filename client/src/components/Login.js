import React, { useState } from 'react';
import auth from '../tools/auth';
import apiService from './../ApiService';

const initialState = {
  email: '',
  pw: '',
};

const Login = (props) => {
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
    const { email, pw } = state;
    const user = { email, pw };
    const res = await apiService.login(user);
    if (res === undefined || res.error) {
      alert("incorrect password or email");
      setState(initialState);
    } else {
      props.setIsAuthenticated(true);
      auth.login(() => props.history.push('/profile'))
    }
  };

  const validateForm = () => {
    return !state.email || !state.pw;
  };

  return (
    <div>
      <h2>Login</h2>
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
          placeholder="enter password"
          name="pw"
          value={state.pw}
          onChange={handleChange}
        />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Login&nbsp;
        </button>
      </form>
      <p>Don't have an account yet?</p>
      <p>To create a <b>professional</b> account <a href='/registerProf'>click here!</a></p>
      <p>To create a <b>client</b> account <a href='/register'>click here!</a></p>
    </div>
  );
};

export default Login;
