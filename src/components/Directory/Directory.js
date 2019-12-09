import React, { useState } from 'react';
import './Directory.scss';
import { defaultSections } from './sections';
import MenuItem from '../Menu-Item/MenuItem';

const Directory = () => {
  const [sections, setSections] = useState(defaultSections);
  return (
    <div className='directory-menu'>
      {
        sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
        ))
      }
    </div>
  );
};

export default Directory;