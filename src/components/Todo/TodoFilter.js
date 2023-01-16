import React from 'react'

const TodoFilter = (props) => {
    const dropdrownChangeHandler = (e) => {
        props.onChangeCategory(e.target.value)
    }
  return (
    <div>
        <select onChange={dropdrownChangeHandler}>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="School">School</option>
        </select>
    </div>
  )
}

export default TodoFilter