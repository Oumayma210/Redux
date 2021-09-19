import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { AddtoDo } from "./components/AddToDo";
import Edit from './components/Edit';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className="App" >
            <Navbar/>
            <h1 style={{color:'brown'}}>To Do List</h1>
            <AddtoDo />
            <ToDoList />
            <Footer/>
        </div>
    );
}

export default App;
