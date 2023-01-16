import '../UI/TodoList.css';
import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem';


function TodoList(props){
    
    const filteredCategoryHandler = selectedCategory => {
        console.log('TodoList.js');
        console.log(selectedCategory);
    };

    return(
        <>
            <TodoFilter onChangeCategory={filteredCategoryHandler}/>
            <TodoItem task={props.data[0].task} status={props.data[0].status} date={props.data[0].date} category={props.data[0].category}  />
            <TodoItem task={props.data[1].task} status={props.data[1].status} date={props.data[1].date} category={props.data[1].category} />

        
        </>
    )
}

export default TodoList;