import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import Home from './components/Home'
import Student from './components/Login/Student'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/studentLogin' element={<Student/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
