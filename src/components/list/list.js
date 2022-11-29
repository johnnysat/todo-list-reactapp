import React from 'react';
import './list.css'
import { AiFillDelete } from 'react-icons/ai';


function List(props) {
  return (
    <ul className="todo-list">  
      {props.itemsList.map((item, index) => (
        <li key={index}>{item} <AiFillDelete /></li>
      ))}
    </ul>
  )
}

export default List;