import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const { user, logInWithEmail } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await logInWithEmail(email, password)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (user?.email) {
      navigate("/")
    }
  })

  return (
    <main>
      <div className="connexion">
        <h1>Connexion au Casino</h1>
        <form onSubmit={handleSubmit}>
          <div className="connexion-email">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="connexion-password">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Login</button>
          <p>
            Mot de passe oublié ?{" "}
            <Link
              style={{
                color: "white",
              }}
              to="/reset-password"
            >
              Reset password
            </Link>
          </p>
        </form>
      </div>
    </main>
  )
}

export default Login
