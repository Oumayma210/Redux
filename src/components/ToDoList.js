import React, { useState } from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import { Button } from "semantic-ui-react";
export const ToDoList = () => {
    const [status, setStatus] = useState("all"); // console.log(toDoList)
    const toDoList = useSelector((state) => state.todo.todo);

    return (
        <div className="todolist">
            <Button.Group>
                <Button
                    onClick={() => setStatus("all")}
                    style={{ color: "brown" }}
                >
                    All
                </Button>
                <Button
                    onClick={() => setStatus("done")}
                    style={{ color: "brown" }}
                >
                    Done
                </Button>
                <Button
                    onClick={() => setStatus("undone")}
                    style={{ color: "brown" }}
                >
                    UnDone
                </Button>
            </Button.Group>
            {status === "all"
                ? toDoList.map((todo, i) => <ToDoItem todo={todo} key={i} />)
                : status == "done"
                ? toDoList
                      .filter((el) => el.Done)
                      .map((todo, i) => <ToDoItem todo={todo} key={i} />)
                : toDoList
                      .filter((el) => !el.Done)
                      .map((todo, i) => <ToDoItem todo={todo} key={i} />)}
        </div>
    );
};
