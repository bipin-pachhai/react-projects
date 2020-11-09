import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { TodoContext } from "./context/TodoContext";
import todoReducer from "./context/reducer";
import ToDoForm from "./components/Form";

//Build a TODO app with context API using reducers and actions
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>TO-DO List App </h1>
        <ToDoForm/>
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
