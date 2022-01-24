import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/Register';
import SplashScreen from './pages/splash';

const App: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/splash" />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/splash" component={SplashScreen} />
    </Switch>
  );
};

export default App;
