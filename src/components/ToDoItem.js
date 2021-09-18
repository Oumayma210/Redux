import React from "react";
import { Button } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import{Delete,Done} from './../redux/actions/actions'
import Edit from './Edit';
import "./ToDoList.css"

const ToDoItem = ({ todo }) => {
    const dispatch=useDispatch()
return(
    <div className='Item'>
        <h3>{todo.task}</h3>
        <Button.Group >
            <Edit id={todo.id} />
            <Button style={{color:"brown"}}onClick={()=>dispatch(Done(todo.id))} >{todo.Done?"unDone":"Done"}</Button>
            <Button style={{color:"brown"}} onClick={()=>dispatch(Delete(todo.id))}>Delete</Button>
        </Button.Group>
    </div>
)};

export default ToDoItem;
