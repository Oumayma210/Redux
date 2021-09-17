import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { AddtoDo } from "./components/AddToDo";
import Edit from './components/Edit';

function App() {
    return (
        <div className="App">
            <h1>To Do List</h1>
            <AddtoDo />
            <ToDoList />
        </div>
    );
}

export default App;
