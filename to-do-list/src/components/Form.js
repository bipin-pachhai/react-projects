import React, {useContext, useState} from 'react';
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
 import{v4 as getID} from 'uuid';
 import {TodoContext} from '../context/TodoContext';
 import {ADD_TODO} from '../context/action.types';

 const ToDoForm = () =>{

   const [todo, setTodo] = useState('');
   const {dispatch} = useContext(TodoContext);
   
   const handleSubmit = e =>{
       e.preventDefault();
       if(todo === ''){
           alert("TODO is empty. Please Add one.")
       }
       else{
       const toDo = {
           todo,
           id : getID()
           
       }
       //we dispatch toDo from here so that it can be stored in the central context created

       dispatch({
           //provide type and value of the dispatch
           type: ADD_TODO,
           payload: toDo
       });

       setTodo('');

    }
       
   }

     return(
         <Form>
             <FormGroup>
                 <InputGroup>
                 <Input
                 
                   type = 'text'
                   name = 'todo'
                   id = 'todo'
                   placeholder ='Enter your next TODO here'
                   value = {todo}
                   onChange ={e => setTodo(e.target.value)}


                 />
                 <InputGroupAddon
                 addonType = 'prepend' 
                 >
                     <Button
                      color = 'primary'
                      onClick = {handleSubmit}
                     >   ADD
                     </Button>

                 </InputGroupAddon>
                 </InputGroup>
             </FormGroup>
         </Form>

     )
 }

 export default ToDoForm;
