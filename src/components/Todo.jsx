import React, { useState } from 'react'

export const Todo = () => {
    let [value,setValue]=useState("");
    const [todos,setTodos]=useState([]);
  return (
    <div>Todo
        <input
        value={value}
        
        onchange={(e)=>{
            setValue(e.target.value);
        }}
        
        />
        <button onClick={()=>{
            todos.push();
            setTodos(todos);
        }}>Add</button>
        {/*TODOS*/}
        {todos.map((todo)=>(
            <div>{todo.value}</div>
        ))}
    </div>
  )
}
