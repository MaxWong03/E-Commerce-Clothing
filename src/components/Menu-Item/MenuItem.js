import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import './MenuItem.scss';

import classNames from 'classnames';

import { BackgroundImageContainer, ContentContainer, TitleContainer, SubtitleContainer } from './MenuItem.styles';

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
      <BackgroundImageContainer
        imageUrl={imageUrl}
      />
      <ContentContainer>
        <TitleContainer
          children={title.toUpperCase()}
        />
        <SubtitleContainer 
          children={'SHOP NOW'}
        />
      </ContentContainer>
    </div>
  );
}

export default MenuItem;