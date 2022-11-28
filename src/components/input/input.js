import React from 'react';
import './input.css'

function Input(props) {
  return (
    <input onChange={props.onChange} placeholder={props.placeholder} value={props.value} type={props.type} required/>
  )
}

export default Input;