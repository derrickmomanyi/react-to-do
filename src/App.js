import {useState} from 'react';
import './App.css';
import Card from './components/Todo/Card';
import TodoList from './components/Todo/TodoList';
import NewTodo from './components/TodoForm/NewTodo';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header';

const todo = [
  {
      id: 1,
      task : 'Showering',
      status: 'Complete',
      date: new Date(2021, 5, 12),
      category: 'Personal'
  },
  {
      id: 2,
      task : 'Do labs',
      status: 'Incomplete',
      date: new Date(2021, 5, 12),
      category: 'School'
  },
  {
      id: 3,
      task : 'Upskill',
      status: 'Complete',
      date: new Date(2021, 5, 12),
      category: 'Personal'
  },
]
function App() {
  const [todoItems, settodoItems] = useState(todo);

  const addtodoItemHandler = (todoitem) => {
    settodoItems([todoitem, ...todoItems]);
  };

  return (
    <Card className="app">
      <Header />
      <Routes>
        <Route path="/" name="Todo List" element={<TodoList data={todoItems}/>} />
        <Route path="/create" name="Create New"  element={<NewTodo toDoStoredData={addtodoItemHandler} />} />
        
      </Routes>
      
      
    </Card>

  )
}

export default App;
