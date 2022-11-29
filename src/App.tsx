import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>  
      <div className="App">
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/products' element={< Products />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
