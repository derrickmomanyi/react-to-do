import '../UI/TodoList.css';
import TodoItem from './TodoItem';


function TodoList(props){

    return(
        <>
            <TodoItem task={props.data[0].task} status={props.data[0].status} date={props.data[0].date} category={props.data[0].category}  />
            <TodoItem task={props.data[1].task} status={props.data[1].status} date={props.data[1].date} category={props.data[1].category} />

        
        </>
    )
}

export default TodoList;