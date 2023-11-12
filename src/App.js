import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"

import ProtectedRoute from "./routes/ProtectedRoute"
import Casino from "./views/Casino"
import ForgotPassword from "./views/ForgotPassword"
import Home from "./views/Home"
import Login from "./views/Login"

import "./App.css"

function App() {
  return (
    <div className='App'>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route element={<Casino />} path='/' />
              <Route element={<Home />} path='/home' />
            </Route>
            <Route element={<Login />} path='/login' />
            <Route element={<ForgotPassword />} path='/reset-password' />
            {/* <Route element={<Signup />} path="/signup" /> */}
            <Route element={<Navigate replace to='/' />} path='*' />
          </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  )
}

export default App
