import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
