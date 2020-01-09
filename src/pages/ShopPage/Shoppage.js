import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../Collection/CollectionPage';
import { updateCollections } from '../../redux/shop/shop.actions';
import { useDispatch } from 'react-redux';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const ShopPage = () => {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    let unsubscribeFromSnapshot = null;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      dispatch(updateCollections(collectionsMap));
    })
  }, [dispatch]);

  return (
    <div className='shop-page'>
      <Route exact path={path} component={CollectionOverview} />
      <Route path={`${path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage;