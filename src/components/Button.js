

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];   {/*button styles array*/}

const SIZES = ['btn--medium', 'btn--large'];        {/*button sizes array*/}

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)     
    ? buttonStyle
    : STYLES[0];                                              {/*makes it so buttonstyle adapts to whatever is needed*/}

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];   {/*same as above but for button size*/}

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button                                  
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}  
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
