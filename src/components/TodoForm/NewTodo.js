import './NewTodo.css';
import React from 'react';
import TodoForm from './TodoForm';


const NewTodo = ({toDoStoredData}) => {
  const saveToDoDataHandler = (enteredToDoData) => {
    const toDoData = {
      ...enteredToDoData,
      id: Math.random().toString()
    };
    toDoStoredData(toDoData);
  }

  return (
    <div className='todo-form'>
        <TodoForm onSaveToDoData={saveToDoDataHandler} />
    </div>
  )
}

export default NewTodo