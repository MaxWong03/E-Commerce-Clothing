import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/HomePage/Homepage';
import ShopPage from './pages/ShopPage/Shoppage';
import SignInSignUp from './pages/Sign-in-and-sign-up/SignInAndSignUp';
import Header from './components/Header/Header';
import { auth } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let subscription = null;
    subscription = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => subscription();
  }, []);

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
