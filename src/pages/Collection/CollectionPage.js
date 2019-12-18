import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import CollectionItem from '../../components/Collection-Item/CollectionItem';

const CollectionPage = () => {
  const { params: { collectionId } } = useRouteMatch();
  const { title, items } = useSelector(
    state => state.shop[collectionId]
    , shallowEqual);

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default CollectionPage;