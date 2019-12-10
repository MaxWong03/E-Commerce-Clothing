import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/HomePage/Homepage';
import ShopPage from './pages/ShopPage/Shoppage';
import SignInSignUp from './pages/Sign-in-and-sign-up/SignInAndSignUp';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
