import React from 'react';
import { useSelector } from 'react-redux';
import { selectDirectory } from '../../redux/directory/directory.selector';
import './Directory.scss';
import MenuItem from '../Menu-Item/MenuItem';

const Directory = () => {
  const sections = useSelector(selectDirectory);
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