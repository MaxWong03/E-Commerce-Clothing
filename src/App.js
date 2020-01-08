import React, { useEffect, memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';
import { selectCollectionForPreview } from './redux/shop/shop.selector';
import './App.css';

import Homepage from './pages/HomePage/Homepage';
import ShopPage from './pages/ShopPage/Shoppage';
import SignInSignUp from './pages/Sign-in-and-sign-up/SignInAndSignUp';
import Header from './components/Header/Header';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const collectionArray = useSelector(selectCollectionForPreview);
  const dispatch = useDispatch();
  useEffect(() => {
    let subscription = null;
    subscription = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) { //if the user is signed in 
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          )
        });
      }
      dispatch(
        setCurrentUser(userAuth)
      );
      addCollectionAndDocuments('collections', collectionArray);

    });
    //componentWillUnmount
    return () => subscription();
  }, [dispatch, collectionArray]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOutPage} />
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
