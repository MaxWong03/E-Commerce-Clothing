import React, { useState } from 'react';

import './Shoppage.scss';

import SHOP_DATA  from './collections';

const ShopPage = () => {
  const [collections, setCollection] = useState(SHOP_DATA);

  return(
    <div>
      Shop page
    </div>
  )
}

export default ShopPage;