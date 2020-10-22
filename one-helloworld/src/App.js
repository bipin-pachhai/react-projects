import React from 'react'
import Button from './Button'
import './styles.css'
const App = () =>{
     //embedding css inside jsx
     return (
        <div>
        <h1 style ={{
            textAlign: 'center',
            color: 'red'
        }}> Hello World</h1>
        <Button title='LogIn'/>  
        <Button title = 'SignUp'/>
        </div>);
};
export default App;
