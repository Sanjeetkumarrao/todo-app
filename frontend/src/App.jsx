import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
      </Routes>
    </Router>
  )
}

export default App
