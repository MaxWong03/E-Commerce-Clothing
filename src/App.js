import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/HomePage/Homepage';
import ShopPage from './pages/ShopPage/Shoppage';
import SignInSignUp from './pages/Sign-in-and-sign-up/SignInAndSignUp';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let subscription = null;
    subscription = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {//login
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else { //logout
        setCurrentUser(userAuth);
      }
    });
    //componentWillUnmount
    return () => subscription();
  }, []);

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
