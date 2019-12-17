import React from 'react';
import { useSelector } from 'react-redux';
import PreviewCollection from '../Preview-Collection/PreviewCollection';
import isEqual from 'lodash/isEqual';
import './CollectionOverview.scss';

const CollectionOverview = () => {
  const collections = useSelector(state => state.shop, isEqual);
  return (
    <div className='collections-overview'>
      {
        collections.map(({ id, ...collectionProps }) => (
          <PreviewCollection key={id} {...collectionProps} />
        ))
      }
    </div>
  )
};

export default CollectionOverview;