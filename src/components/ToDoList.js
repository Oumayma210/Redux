import React,{useState} from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import {Button} from 'semantic-ui-react'
export const ToDoList = () => {
    const [status, setstatus] = useState("all")    // console.log(toDoList)
    const toDoList = useSelector((state) => state.todo.todo);

    return (
        <div>
             <Button.Group basic>
            <Button onClick={()=>setstatus("all")}>All</Button>
            <Button onClick={()=>setstatus("done")}>Done</Button>
            <Button onClick={()=>setstatus("undone")}>unDone</Button>
        </Button.Group>
        <br/>
        {status==="all"?
        toDoList.map((todo, i) => <ToDoItem key={i} todo={todo}/>)
        : status=="done"  
        ?toDoList.filter((el)=>el.Done).map((todo,i)=><ToDoItem todo={todo} key={i}/>)
            :toDoList.filter((el)=>!el.Done).map((todo,i)=><ToDoItem todo={todo} key={i}/>)
        }
            
           
        </div>
    );
};
