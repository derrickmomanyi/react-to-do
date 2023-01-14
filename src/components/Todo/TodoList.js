import '../UI/TodoList.css';
import TodoItem from './TodoItem';


function TodoList(){
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

    return(
        <>
            <TodoItem task={todo[0].task} status={todo[0].status} date={todo[0].date} category={todo[0].category}  />
            <TodoItem task={todo[1].task} status={todo[1].status} date={todo[1].date} category={todo[0].category} />
            <TodoItem task={todo[2].task} status={todo[2].status} date={todo[2].date} category={todo[0].category}/>
        
        </>
    )
}

export default TodoList;