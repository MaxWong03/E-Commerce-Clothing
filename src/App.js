import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/HomePage/Homepage';
import ShopPage from './pages/ShopPage/Shoppage';
import SignInSignUp from './pages/Sign-in-and-sign-up/SignInAndSignUp';

function App() {
  return (
    <div>
      {/* <Switch> */}
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      {/* </Switch> */}
    </div>
  );
}

export default App;
