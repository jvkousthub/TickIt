import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [finished, setFinished] = useState(true);

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      setTodos(parsedTodos);
    }
  }, []);

  // Automatically save todos to localStorage whenever todos state changes
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleSetFinished = () => {
    setFinished(!finished);
  };

  const handleEdit = (e, id) => {
    const taskToEdit = todos.find(todo => todo.id === id);
    setTodo(taskToEdit.todo);

    const updatedTodos = todos.filter(item => item.id !== id);
    setTodos(updatedTodos);
  };

  const handleDelete = (e) => {
    const id = e.target.name;
    const updatedTodos = todos.filter(item => item.id !== id);
    setTodos(updatedTodos);
  };

  const handleAdd = () => {
    if (todo.trim()) {
      const newTodo = { id: uuidv4(), todo, isCompleted: false };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const updatedTodos = todos.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <Navbar />
      <div className=" bg-yellow-400 text-black px-5 py-5 my-5 m-8 mx-auto rounded-xl min-h-[90vh] w-[80vw]">
        <div className="flex justify-center items-center">
          <div className="addtodo flex text-lg font-semibold text-l font-sans px-5">Add Todo: </div>
          <input
            type="text"
            onChange={handleChange}
            value={todo}
            placeholder="Task..."
            className="rounded mx-1 h-9 p-3 w-1/2"
          />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 3}
            className="bg-blackperal hover:bg-black text-white p-2 rounded"
          >
            Add Task
          </button>
        </div>
        <div className="font-semibold px-5 py-5 text-2xl">Your Tasks</div>
        <div>
          <input type="checkbox" onClick={handleSetFinished} checked={finished} /> Show Finished
        </div>
        <div className="todos">
          {todos.length === 0 && <div className="flex justify-center text-lg">No Tasks to display</div>}
          {todos.map(item => {
            return (finished || !item.isCompleted) && (
              <div key={item.id} className="todo flex items-center justify-between w-3/4 mx-7">
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons gap-6 my-1">
                  <button onClick={(e) => handleEdit(e, item.id)} className="bg-blackperal hover:bg-black text-white py-1 rounded mx-2 px-3">Edit</button>
                  <button onClick={handleDelete} name={item.id} className="bg-blackperal hover:bg-black text-white py-1 rounded mx-2 px-3">Delete</button>
                  <input type="checkbox" name={item.id} onChange={handleCheckbox} checked={item.isCompleted} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
