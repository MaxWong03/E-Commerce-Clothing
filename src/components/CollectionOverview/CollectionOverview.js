import React from 'react';
import { useSelector } from 'react-redux';
import PreviewCollection from '../Preview-Collection/PreviewCollection';
import isEqual from 'lodash/isEqual';
import './CollectionOverview.scss';

const CollectionOverview = () => {
  const collections = useSelector(state => state.shop, isEqual);
  const entries = Object.entries(collections);
  return (
    <div className='collections-overview'>
      {
        entries.map(([name, value]) => (
          <PreviewCollection key={value.id} {...value} />
        ))
      }
    </div>
  )
};

export default CollectionOverview;