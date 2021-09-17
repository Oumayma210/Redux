import React from "react";
import { Button } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import{Delete,Done} from './../redux/actions/actions'
import Edit from './Edit';
const ToDoItem = ({ todo }) => {
    const dispatch=useDispatch()
return(
    <div className='Item'>
        <h3>{todo.task}</h3>
        <Button.Group basic>
            <Edit id={todo.id}/>
            <Button onClick={()=>dispatch(Done(todo.id))}>{todo.Done?"undone":"done"}</Button>
            <Button onClick={()=>dispatch(Delete(todo.id))}>Delete</Button>
        </Button.Group>
    </div>
)};

export default ToDoItem;
