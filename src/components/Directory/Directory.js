import React from 'react';
import { useSelector } from 'react-redux';
import './Directory.scss';
import MenuItem from '../Menu-Item/MenuItem';
import isEqual from 'lodash/isEqual';

const Directory = () => {
  const sections = useSelector(state => state.directory, isEqual);
  return (
    <div className='directory-menu'>
      {
        sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))
      }
    </div>
  );
};

export default Directory;