import React, {useContext} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {FaTimes} from 'react-icons/fa';



/* import {TodoContext} from '../context/TodoContext';
import {REMOVE_TODO} from '../context/action.types';

const TodoList = ()=>{
    const {todos, dispatch} = useContext(TodoContext);
    return(
        <ListGroup className = "mt-8 mb-2 items">
 
        {
            todos.map( todo =>(<ListGroupItem key ={todo.id}>{todo.todo}
            <span className = 'float-right' onClick = {()=>{
                dispatch({
                    type: REMOVE_TODO,
                    payload : todo.id
                })
            }
            } ><FaTimes/></span>
            </ListGroupItem>)
            )
        }
 
         </ListGroup>
    )


}

export default TodoList;
 */

//***************************Alternative: Designing App using local storage and useEffect()***************************//
 const TodoList = ({todos, removeTodoList})=>{
     return(
         <ListGroup className = "mt-5 mb-2 items">
             {
                 todos.map(todo => (
                     <ListGroupItem key ={todo.id}>
                         {
                             todo.todoItem
                         }
                         <span className = 'float-right' onClick = {()=> removeTodoList(todo.id)}><FaTimes/></span>
                     </ListGroupItem>

                 ))
             }
         </ListGroup>
     )


 }
export default TodoList;
