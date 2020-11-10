 import React, { useEffect, useReducer, useState } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//***************************Designing App using useReducer()***************************//

/*
import { TodoContext } from "./context/TodoContext";
import reducer from "./context/reducer";
import ToDoForm from "./components/Form";
import TodoList from "./components/TodoList";

//Build a TODO app with context API using reducers and actions
//NOTE: Read the documentation of useReducer()
const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <Container fluid>
      <h1>TO-DO List App </h1>
      <TodoContext.Provider value={{ todos, dispatch }}>
    
        <ToDoForm/>
        <TodoList/>
        
      </TodoContext.Provider>
    </Container>
  );
};

export default App;
 */


//*************************** */ Alternative: Designing App using local storage and useEffect()***************************//

import TodoList from "./components/TodoList";
import ToDoForm from "./components/Form"

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

//This effect comes to action when application loads up
  useEffect(()=>{
    const localTodos = localStorage.getItem("todos");
    if(localTodos){
      setTodoItems(JSON.parse(localTodos));
    }
  },[]); 
  
//function to add items to the state
  const addTodos = async todo =>{
    setTodoItems([...todoItems, todo])
  }
//This effects applies only when components or states passed in the array as second argument changes
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems]);

  //function to remove items and filter the state
const removeTodoList = id =>{
  setTodoItems(todoItems.filter(todo => todo.id !== id));
}

//NOTE: Function props are passed only with the single braces whereas value props are passed with double braces
return(
  <Container fluid>
    <h1>TODO APP WITH LOCAL STORAGE FEATURE</h1>
    <TodoList todos = {todoItems} removeTodoList ={removeTodoList}/>
    <ToDoForm  addTodos ={addTodos}/>
    
  </Container>
)
}
export default App;

