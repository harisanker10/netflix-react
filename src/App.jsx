import './App.css';
import Home from './pages/Home';
import Navbar from './compnents/Navbar';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<h1 className="text-white">Login</h1>} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}


export default App
