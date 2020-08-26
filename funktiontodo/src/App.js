import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import InputTodo from "./components/InputTodo"
import TodoItems from "./components/TodoItems"

import "./App.css"

function App() {
    return (
        <div className="App">
            <InputTodo />
            <TodoItems />
        </div>
    )
}

export default App
