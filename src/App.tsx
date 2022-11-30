import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import Home from './pages/Home/index_orig';
import Products from './pages/Products';
import Test from './pages/Test/Test';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>  
      <div className="App">
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/products' element={< Products />}></Route>
          <Route path='/test' element={< Test />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
