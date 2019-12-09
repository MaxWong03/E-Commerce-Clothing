import React, { useState } from 'react';

import './Shoppage.scss';

import SHOP_DATA from './collections';

import PreviewCollection from '../../components/Preview-Collection/PreviewCollection';

const ShopPage = () => {
  const [collections, setCollection] = useState(SHOP_DATA);

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