import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import HomePage from './comp/Index'
import Room from './Rooms/Room'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='room/:roomId' element={<Room/>}/>
     </Routes>
    </>
  )
}

export default App
