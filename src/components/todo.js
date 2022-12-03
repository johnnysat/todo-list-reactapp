import React, { useState } from 'react';
import List from './list/list';
import Input from './input/input';
import Button from './button/button';
import Form from './form/form';
import Footer from './footer/footer';
import './todo.css'


function Todo(){
  const [task, setTask] = useState([]);
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

  const deleteItemToList = (index) => {
    const itemDelete = Array.from(itemsList);
    itemDelete.splice(index, 1);
    setTask(itemDelete);
  }

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <Form onSubmit={handleAddItemToList}>
        <Input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task} />
        <Button type="submit">Adicionar</Button>
        <List itemsList={itemsList} 
        onDelete={() => deleteItemToList(itemsList)}/>
      </Form>
      <Footer />
    </div>
  );

}

export default Todo;
