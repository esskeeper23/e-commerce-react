import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import ProductDetail from "./components/routes/ProductDetail";
import Header from './components/shared/Header'
import axios from 'axios'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import Cart from './components/routes/Cart'

function App() {

/*   useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
    const obj = {
      firstName: 'rene',
      lastName: 'Martinez',
      email: 'rene2.gen16@gmail.com',
      password: 'oscarrene',
      phone: '1234568795',
      role: 'admin'
    }
    axios.post(URL, obj)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, []) */

  

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />}/>

        <Route element={<ProtectedRoutes />} >
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/Cart' element={<Cart />}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
