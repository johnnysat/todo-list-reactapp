import React from 'react';
import './button.css';

function Button(props) {
  return (
    <button className="button_form" type={props.type}>
      {props.children}
    </button>
  )
}

export default Button;