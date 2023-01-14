import React from 'react'
import Card from './Card'
import '../UI/TodoItem.css'

const TodoItem = (props) => {
  
  return (
    <Card className="todo-items">
      <div className='todoitem'>
        <h1 id='itemheading'>Task: {props.task}</h1> 
        <div id="itemstatus">
          <h3>Status: {props.status}</h3>
          <h3>Category: {props.category}</h3>
        </div>
        <h5>Date: {props.date}</h5>
      </div>
    

    </Card>
  )
}

export default TodoItem
