import React, { useState } from 'react';
import List from './list/list'
import Input from './input/input'
import Button from './button/button'



function Todo(){
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form onSubmit={handleAddItemToList}>
        <Input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task} />
        <Button type="submit">Adicionar</Button>
      </form>
      <List itemsList={itemsList} />
    </div>
  );

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setTask(inputTask);
 }

  function handleAddItemToList(event){
    event.preventDefault();

    setItemsList([...itemsList, task])

    setTask("");
  }

}

export default Todo;
