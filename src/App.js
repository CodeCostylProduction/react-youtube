import React from 'react'
import TodoList from "./Todo/TodoList";

function App() {
  let todosList = [
      {id:1, completed: true, title: 'Купить хлеб'},
      {id:2, completed: false, title: 'Купить масло'},
      {id:3, completed: false, title: 'Купить молоко'}
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
    
  return (
     <div className="wrapper">
       <h1>React tutorial</h1>
         <TodoList todos={todos} onToggle={toggleTodo} />
     </div>
  );
}

export default App;
