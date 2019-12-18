import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../Collection/CollectionPage';
import './Shoppage.scss';

const ShopPage = () => {
  const { path } = useRouteMatch();
  return (
    <div className='shop-page'>
      <Route exact path={path} component={CollectionOverview} />
      <Route path={`${path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage;