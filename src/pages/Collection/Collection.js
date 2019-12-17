import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import CollectionItem from '../../components/Collection-Item/CollectionItem';
import './Collection.scss';

const CollectionPage = () => {
  const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
  };
  const { params: { collectionId } } = useRouteMatch();
  const collection = useSelector(state => state.shop.filter(shopCollection => shopCollection.id === COLLECTION_ID_MAP[collectionId]), shallowEqual);
  console.log(collection);
  return (
    <div className='collection-page'>
      <h2>Collection</h2>
    </div>
  )
}

export default CollectionPage;