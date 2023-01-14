import './App.css';
import Card from './components/Todo/Card';
import TodoList from './components/Todo/TodoList';

function App() {
  return (

    <Card className="app">
      <h1>This is my to-do list</h1>
      <TodoList />
    </Card>

  )
}

export default App;
