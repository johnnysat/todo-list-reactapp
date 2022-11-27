import React, { useState } from 'react';

function Todo(){
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form onSubmit={handleAddItemToList}>
        <input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput}/>
        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list">
        {itemsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setTask(inputTask);
 }

 function handleAddItemToList(event){
  event.preventDefault();

  setItemsList([...itemsList, task])
 }

}

export default Todo;
