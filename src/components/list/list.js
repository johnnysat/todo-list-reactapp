import React from 'react';
import './list.css'

function List(props) {
  return (
    <ul className="todo-list">  
      {props.itemsList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default List;