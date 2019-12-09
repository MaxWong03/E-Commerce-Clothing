import React from 'react';

import './MenuItem.scss';

import classNames from 'classnames';

const MenuItem = ({ title, imageUrl, size }) => {

  const menuItem = classNames('menu-item', {
    'menu-item large': size
  });

  return (
    <div style={{
      backgroundImage: `url(${imageUrl})`
    }} className={menuItem}>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;