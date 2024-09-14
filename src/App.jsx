import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
      <div className="bg-yellow-400 text-black">Iam ToDo</div>
     </div>
    </>
  )
}

export default App
