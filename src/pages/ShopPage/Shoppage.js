import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../Collection/CollectionPage';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const ShopPage = () => {
  const { path } = useRouteMatch();

  useEffect(() => {
    let unsubscribeFromSnapshot = null;
    const collectionRef = firestore.collection('collections');
    
    collectionRef.onSnapshot(async snapshot => {
      console.log(convertCollectionsSnapshotToMap(snapshot));
    })
  });
  
  return (
    <div className='shop-page'>
      <Route exact path={path} component={CollectionOverview} />
      <Route path={`${path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage;