import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { BackgroundImageContainer, ContentContainer, TitleContainer, SubtitleContainer, MenuItemContainer } from './MenuItem.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <MenuItemContainer
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      size={size}
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
    </MenuItemContainer>
  );
}

export default MenuItem;