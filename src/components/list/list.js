import React from 'react';
import './list.css'
import { AiFillDelete } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';



function List(props) {
  return (
    <ul className="todo-list">  
      {props.itemsList.map((item, index) => (
        <li key={index}>{item} 
          <div className="icons">
            <MdVerified id="icon_verified"/>
            <AiFillDelete id="icon_delete"/>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List;