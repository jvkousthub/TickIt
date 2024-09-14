import Navbar from "./components/Navbar"
import { useState } from "react"



function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const handleEdit=()=>
  {
    
  }
  const handleDelete=()=>
  {

  }
  const handleAdd=()=>
  {

  }
  return (
    <>
      <Navbar />
      <div className=" bg-yellow-400 text-black px-5 py-5 my-5 m-8 mx-auto rounded-xl min-h-[90vh] w-[80vw]">
        <div className="flex justify-center items-center">
          <div className="addtodo flex text-lg font-semibold text-l font-sans px-5">Add Todo: </div>
          <input type="text" placeholder="Task..." className="rounded mx-1 h-9 p-3 w-1/2" />
          <button onClick={handleAdd} className="bg-blackperal hover:bg-black text-white p-2 rounded ">Add Task</button></div>
        <div className="font-semibold px-5 py-5 text-2xl">Your Tasks</div>
        <div className="todos">
          <div className="todo flex justify-between mx-7">
            <div className="text">
              {todo}
            </div>
            <div className="buttons gap-6 ">
              <button onClick={handleEdit} className="bg-blackperal hover:bg-black text-white py-1 rounded mx-2 px-3">Edit</button>
              <button onClick={handleDelete} className="bg-blackperal hover:bg-black text-white py-1 rounded mx-2 px-3">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
