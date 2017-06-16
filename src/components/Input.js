import React from 'react';
import classnames from 'classnames';

import '../styles/Input.css';

const Input = (props) => {
  const classNames = classnames(['form-control', 'Input']);

  return (
    <div className="form-group">
      <input 
        type="text"
        className={classNames} maxLength="39"  {...props} />
    </div>
  );
};


export default Input;