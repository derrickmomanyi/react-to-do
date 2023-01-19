import { useState } from 'react';
import '../UI/TodoList.css';
import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem';


function TodoList(props){
    const [filteredCategory, setFilteredCategory] = useState('Personal');
    
    const filteredCategoryHandler = selectedCategory => {
        setFilteredCategory(selectedCategory);
       
    };

    const filteredList = props.data.filter(list => {
        return list.category === filteredCategory;

    });

    let todoItemContent = <h3>No Todo Item found in that Category</h3>

    if(filteredList.length > 0){
        todoItemContent = filteredList.map((todoitem) => (
            <TodoItem 
                key={todoitem.id}
                task={todoitem.task} 
                status={todoitem.status} 
                date={todoitem.date} 
                category={todoitem.category} 
            />
        ))
    }
    

    return(
        <>
            <TodoFilter selected={filteredCategory} onChangeCategory={filteredCategoryHandler}/>
            {todoItemContent}
        </>
    )
}

export default TodoList;