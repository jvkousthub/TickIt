import Navbar from "./components/Navbar"
import { useState, useEffect } from "react"
import './App.css'
import { v4 as uuidv4 } from 'uuid';




function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [finished, setFinished] = useState(true)

  
  useEffect(() => {
    let n = JSON.parse(localStorage.getItem("todos"))
    if (n) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
      // savetoLS()
    }
  }, [])

  const savetoLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newtodos = todos.filter(item => {
      return item.id != id
    })
    setTodos(newtodos)
    savetoLS()
  }
  const handleDelete = (e) => {
    const id = e.target.name
    let newtodos = todos.filter(item => {
      return item.id != id
    })
    setTodos(newtodos)
    savetoLS()
  }
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    savetoLS()
    setTodo("")

  }
  const handleChange = (e) => {
    setTodo(e.target.value)

  }
  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    setTodos(newtodos)
    savetoLS()
  }
  return (
    <>
      <Navbar />
      <div className=" bg-yellow-400 text-black px-5 py-5 my-5 m-8 mx-auto rounded-xl min-h-[90vh] w-[80vw]">
        <div className="flex justify-center items-center">
          <div className="addtodo flex text-lg font-semibold text-l font-sans px-5">Add Todo: </div>
          <input type="text" onChange={handleChange} value={todo} placeholder="Task..." className="rounded mx-1 h-9 p-3 w-1/2" />
          <button onClick={handleAdd} disabled={todo.length<=3} className="bg-blackperal hover:bg-black text-white p-2 rounded ">Add Task</button></div>
        <div className="font-semibold px-5 py-5 text-2xl">Your Tasks</div>
        <div className="todos">
          {todos.length === 0 && <div className="flex justify-center text-lg"> No Tasks to display </div>}
          {todos.map(item => {
            return <div key={item.id} className="todo flex items-center justify-between w-3/4 mx-7">
              <div className={item.isCompleted ? "line-through" : ""}>
                {item.todo}
              </div>
              <div className="buttons gap-6 my-1">
                <button onClick={(e) => { handleEdit(e, item.id) }} className="bg-blackperal hover:bg-black text-white py-1 rounded mx-2 px-3">Edit</button>
                <button onClick={handleDelete} name={item.id} className="bg-blackperal hover:bg-black text-white py-1 rounded mx-2 px-3">Delete</button>
                <input type="checkbox" name={item.id} onChange={handleCheckbox} value={item.isCompleted} />
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
