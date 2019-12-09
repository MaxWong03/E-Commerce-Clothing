import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/HomePage/Homepage';
import ShopPage from './pages/ShopPage/Shoppage';

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
