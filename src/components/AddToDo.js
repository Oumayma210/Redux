import React, { useRef } from "react";
// import { Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addTodo } from './../redux/actions/actions';
import "./ToDoList.css"

export const AddtoDo = () => {
    // const [text, setText] = useState("");
    const dispatch = useDispatch();
    const addTodoRef = useRef();
    const handleAdd=()=>{
      // addTodoRef.current.value=" ";
      if (addTodoRef.current.value) {
        dispatch(addTodo({task:addTodoRef.current.value, id:Math.random(), Done:false}))
        // text==truthy
        // setText("");
        addTodoRef.current.value=" ";
      } else {
        alert("Can't add an empty task");
      }
    };
    
    return (
        <div className="ui action input">
            <input type="text" placeholder="Add task" ref={addTodoRef} /> <button className='ui button'onClick={() => handleAdd()}>ADD</button>
        </div>
    );
};
