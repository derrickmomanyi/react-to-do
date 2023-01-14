import './App.css';
import Card from './components/Todo/Card';
import TodoList from './components/Todo/TodoList';
import NewTodo from './components/TodoForm/NewTodo';

function App() {
  const todo = [
    {
        id: 1,
        task : 'Showering',
        status: 'Complete',
        date: '12th January 2023',
        category: 'Personal'
    },
    {
        id: 2,
        task : 'Do labs',
        status: 'Incomplete',
        date: '13th January 2023',
        category: 'School'
    },
    {
        id: 3,
        task : 'Upskill',
        status: 'Complete',
        date: '15th January 2023',
        category: 'Personal'
    },

]

const toDoStoredData = (todoData) => {
  console.log(todoData);

}
  return (

    

    <Card className="app">
      <NewTodo toDoStoredData={toDoStoredData} />
      <TodoList data={todo}/>
    </Card>

  )
}

export default App;
