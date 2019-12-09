import React, { useState } from 'react';
import './Directory.scss';
import { defaultSections } from './sections';
import MenuItem from '../Menu-Item/MenuItem';

const Directory = () => {
  const [sections, setSections] = useState(defaultSections);
  return (
    <div className='directory-menu'>
      {
        sections.map(({ title, imageUrl, id }) => (
          <MenuItem key={id} title={title} />
        ))
      }
    </div>
  );
};

export default Directory;