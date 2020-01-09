import React, { useEffect, useState } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../Collection/CollectionPage';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import { useDispatch } from 'react-redux';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {
  const [isLoading, setLoading] = useState(true);
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    let unsubscribeFromSnapshot = null;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      dispatch(updateCollections(collectionsMap));
      setLoading(false);
    })
  }, [dispatch]);

  return (
    <div className='shop-page'>
      <Route exact path={path} render={() => <CollectionOverviewWithSpinner isLoading={isLoading} />} />
      <Route path={`${path}/:collectionId`} render={() => <CollectionPageWithSpinner isLoading={isLoading} />} />
    </div>
  )
}

export default ShopPage;