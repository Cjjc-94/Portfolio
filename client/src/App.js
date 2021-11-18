import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import auth from './tools/auth';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ApiService from './ApiService';



function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);
  const initialProState = "false";
  const [isPro, setIsPro] = useState(initialProState);

  useEffect(() => {
    if(isAuthenticated === true) {
      ApiService.profile()
      .then(user => {
        setIsPro(user.type)
      })
    }
  } )

  return (
    <div className="App">
      <Router>
        <Navbar isAuthenticated={isAuthenticated} isPro={isPro}/>
        <Dashboard setIsAuthenticated={setIsAuthenticated} isPro={isPro}/>
      </Router>
    </div>
  );
}

export default App;
