import React from 'react';
import './form.css'

function Form(props){
  return (
    <form onSubmit={props.onSubmit} className="body_form">
      {props.children}
    </form>
  )
}

export default Form;