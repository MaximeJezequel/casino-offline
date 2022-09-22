import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"

import Casino from "./components/Casino"
import ForgotPassword from "./components/ForgotPassword"
import Home from "./components/Home"
import Login from "./components/Login"
import ProtectedRoute from "./routes/ProtectedRoute"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route element={<Casino />} path="/" />
              <Route element={<Home />} path="/home" />
            </Route>
            <Route element={<Login />} path="/login" />
            <Route element={<ForgotPassword />} path="/reset-password" />
            {/* <Route element={<Signup />} path="/signup" /> */}
            <Route element={<Navigate replace to="/" />} path="*" />
          </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  )
}

export default App
