import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import './MenuItem.scss';

import classNames from 'classnames';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const menuItem = classNames('menu-item', {
    'menu-item large': size
  });

  return (
    <div
      className={menuItem}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;