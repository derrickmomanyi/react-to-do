import React, {useState} from 'react'

const TodoForm = (props) => {
    const [enteredTask, setEnteredTask] = useState('');
    const [enteredStatus, setEnteredStatus] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('');


    const taskChangeHandler = (e) => {
        setEnteredTask(e.target.value);
    }

    const statusChangeHandler = (e) => {
        setEnteredStatus(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    const categoryChangeHandler = (e) => {
        setEnteredCategory(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const todoData = {
            task: enteredTask,
            status: enteredStatus,
            date: new Date(enteredDate),
            category: enteredCategory
        };
        console.log(todoData);
        props.onSaveToDoData(todoData);
        setEnteredTask('');
        setEnteredStatus('');
        setEnteredDate('');
        setEnteredCategory('');
    }


  return (
    <form onSubmit={submitHandler}>
        <div className="mb-3">
            <label className="form-label">Task name</label>
            <input 
            className="form-control"
            value={enteredTask} 
            type="text" 
            onChange={taskChangeHandler} />
        </div>
        <div className="mb-3">
            <label className="form-label">Status</label>
            <input 
            type="text" 
            value={enteredStatus}
            className="form-control" 
            onChange={statusChangeHandler} />
        </div>
        <div className="mb-3">
            <label className="form-label">Date</label>
            <input 
            type='date' 
            value={enteredDate}
            className="form-control" 
            data-provide="datepicker" 
            onChange={dateChangeHandler} />
        </div>
        <div className="mb-3">
            <label className="form-label">Category</label>
            <input 
            type="text" 
            value={enteredCategory}
            className="form-control" 
            onChange={categoryChangeHandler} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default TodoForm