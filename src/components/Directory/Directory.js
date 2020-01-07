import React from 'react';
import { useSelector } from 'react-redux';
import { selectDirectory } from '../../redux/directory/directory.selector';
import MenuItem from '../Menu-Item/MenuItem';
import { DirectoryMenuContainer } from './Directory.styles';

const Directory = () => {
  const sections = useSelector(selectDirectory);
  return (
    <DirectoryMenuContainer>
      {
        sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))
      }
    </DirectoryMenuContainer>
  );
};

export default Directory;