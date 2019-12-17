import React from 'react';
import { useSelector } from 'react-redux';
import PreviewCollection from '../../components/Preview-Collection/PreviewCollection';
import isEqual from 'lodash/isEqual';
import './Shoppage.scss';


const ShopPage = () => {
  const collections = useSelector(state => state.shop, isEqual);
  return (
    <div className='shop-page'>
      {
        collections.map(({ id, ...collectionProps }) => (
          <PreviewCollection key={id} {...collectionProps} />
        ))
      }
    </div>
  )
}

export default ShopPage;