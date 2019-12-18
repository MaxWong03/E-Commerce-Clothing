import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import PreviewCollection from '../Preview-Collection/PreviewCollection';
import './CollectionOverview.scss';

const CollectionOverview = () => {
  const collection = useSelector(selectCollectionForPreview);
  return (
    <div className='collections-overview'>
      {
        collection.map(([name, value]) => (
          <PreviewCollection key={value.id} {...value} />
        ))
      }
    </div>
  )
};

export default CollectionOverview;