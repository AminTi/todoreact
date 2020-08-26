import React, { useState, useEffect } from "react"
import TodoItems from "./TodoItems"

function InputTodo() {
    const [inputValue, setValue] = useState()
    const [todos, setTodos] = useState([])

    const inputHandler = (e) => {
        setValue(e.target.value)
    }

    const submitHandler = (e) => {
        setTodos([...todos, inputValue])
        setValue(" ")
        e.preventDefault()
    }

    const ClickHandler = (e) => {
        const Index = e.target.getAttribute("data-del")
        //e.target.parentElement.remove()
        let arr = [...todos]
        arr.splice(Index, 1)
        setTodos(arr)
        e.preventDefault()
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                onChange={inputHandler}
                type="text"
                value={inputValue || ""}
            />
            <button type="submit">Sänd</button>

            <TodoItems
                MapTodoItems={todos.map((value, index) => (
                    <li key={index}>
                        {" "}
                        {value}{" "}
                        <button onClick={ClickHandler} data-del={index}>
                            X
                        </button>
                    </li>
                ))}
            />
        </form>
    )
}

export default InputTodo
