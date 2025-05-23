import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Login from './Login.jsx'
import Landing from './Landing .jsx'
import Signup from './Signup.jsx'
import Account from './account.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  </BrowserRouter>
)
