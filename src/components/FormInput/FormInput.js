import React from 'react';

import './FormInput.scss';

import classNames from 'classnames';

const FormInput = ({ handleChange, label, ...otherProps }) => {

  const labelName = classNames('form-input-label', {
    'shrink form-input-label': otherProps.value.length
  });

  return (
    <div className='group'>
      <input
        className='form-input'
        onChange={handleChange}
        {...otherProps}
      />
      {
        label ?
        <label className={labelName}>
          {label}
        </label>
          : null
      }
    </div>
  )
}

export default FormInput;