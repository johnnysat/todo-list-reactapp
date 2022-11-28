import React, { useState } from 'react';
import List from './list/list';
import Input from './input/input';
import Button from './button/button';
import Form from './form/form';
import './todo.css'



function Todo(){
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setTask(inputTask);
 }

  function handleAddItemToList(event){
    event.preventDefault();

    setItemsList([...itemsList, task])

    setTask("");
  }

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <Form onSubmit={handleAddItemToList}>
        <Input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task} />
        <Button type="submit">Adicionar</Button>
        <List itemsList={itemsList} />
      </Form>
    </div>
  );

}

export default Todo;
