import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import AddEmployee from './employees/AddEmployee'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route 
          path="/addemployee"
          element={<AddEmployee />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
