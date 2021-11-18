import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Logout from './Logout';
import Home from './Home';
import RegisterProf from './RegisterProf';
import ProfFilter from '../ProfList/ProfFilter';
import ProfPage from '../ProfList/ProfPage';
import ReqForm from '../appointment/requestForm';

const Dashboard = ({ setIsAuthenticated, isPro }) => {
  return (
    <div className="dashboard">
      <Switch>
      <Route path="/home" component={Home} />
        <Route
          path="/register"
          render={(props) => (
            <Register {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route
          path="/registerProf"
          render={(props) => (
            <RegisterProf {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route path="/profile" component={Profile} />
        <Route path="/profFilter" component={ProfFilter} />
        <Route
          path="/logout"
          render={(props) => (
            <Logout {...props} setIsAuthenticated={setIsAuthenticated} isPro={isPro}/>
            )}
            />
          <Route path="/:_id/requestForm" render={(props) => (
              <ReqForm {...props} setIsAuthenticated={setIsAuthenticated} isPro={isPro}/>
            )}
          />
        <Route path="/:_id" render={(props) => (
            <ProfPage {...props} setIsAuthenticated={setIsAuthenticated} isPro={isPro}/>
          )}
        />
        <Route path="/"
          render={(props) => (
            <Login {...props} setIsAuthenticated={setIsAuthenticated} />
          )} />
      </Switch>
    </div>
  );
};

export default Dashboard;
