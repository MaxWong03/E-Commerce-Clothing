import React, { useEffect, memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import './App.css';

import Homepage from './pages/HomePage/Homepage';
import ShopPage from './pages/ShopPage/Shoppage';
import SignInSignUp from './pages/Sign-in-and-sign-up/SignInAndSignUp';
import Header from './components/Header/Header';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user, shallowEqual);
  useEffect(() => {
    let subscription = null;
    subscription = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {//login
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          )
        });
      } else { //logout
        dispatch(
          setCurrentUser(userAuth)
        );
      }
    });
    //componentWillUnmount
    return () => subscription();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOutPage}/>
        <Route exact path='/signin' render={
          () => currentUser ? (
            <Redirect to='/' />
          ) : (
              <SignInSignUp />
            )
        }
        />
      </Switch>
    </div>
  );
}

export default memo(App);
