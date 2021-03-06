import React from 'react'
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo"

function App() {
    let todosList = [
        {id: 1, completed: true, title: 'Купить хлеб'},
        {id: 2, completed: false, title: 'Купить масло'},
        {id: 3, completed: false, title: 'Купить молоко'}
    ]

    const [todos, setTodos] = React.useState(todosList)

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat(
            [{
                title,
                id: Date.now(),
                completed: false
            }]
        ))
    }

    return (
        <Context.Provider value={{removeTodo: removeTodo}}>
            <div className="wrapper">
                <h1>Список задач:</h1>
                <AddTodo onCreate={addTodo}/>
                {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> :
                    <p className="no_todos">Задачи отсутствуют</p>}
            </div>
        </Context.Provider>
    );
}

export default App;
