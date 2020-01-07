import React from 'react';

// import './Homepage.scss';

import Directory from '../../components/Directory/Directory'

import { HomePageContainer } from './Homepage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  )
}

export default HomePage;