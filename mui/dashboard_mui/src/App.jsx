import './App.css'
import AccountDetail from './components/AccountDetail';
import Customer from './components/Customer';
import CustomerForm from './components/CustomerForm';
import Dashboard from './components/Dashboard';
import EditEmail from './components/EditEmail';
import PasswordEdit from './components/PasswordEdit';
import Home from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'

import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>

          { isAuthenticated !== null ? 
            (<Route path='/' element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path='/customer' element={<Customer />}></Route>
            <Route path='/customerForm' element={<CustomerForm />} />
            <Route path='/profile' element={<AccountDetail />} />
            <Route path='/emailEdit' element={<EditEmail />} />
            <Route path='/passwordEdit' element={<PasswordEdit />} />

          </Route>)
          :
          null
          }


        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
