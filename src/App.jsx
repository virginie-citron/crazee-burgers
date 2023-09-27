
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './components/pages/login/LoginPage'
import Orderpage from './components/pages/login/order/Orderpage'
import ErrorPage from './components/error/ErrorPage'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order" element={<Orderpage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
