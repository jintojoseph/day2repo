import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import Add from '../components/Add'
import View from '../components/View'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  // let appName="React";
  const [appName,setappName]=useState("studApp")
  return (
    <>
      <h1>Welcome to {appName} project</h1>
      <br />
      
      <Navbar/> <br />
      <Routes>
      <Route path='/' element={<View/>} ></Route>
      <Route path='/add' element={<Add person={{"sname":"alex","adm":"2423hh","department":"physics","semester":"3rd" }}/>} ></Route>
      </Routes>
    </>
  )
}

export default App
