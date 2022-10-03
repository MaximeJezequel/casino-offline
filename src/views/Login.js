import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

import { faUnlockKeyhole, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
      alert("Email ou mot de passe non valide")
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
        <form onSubmit={handleSubmit}>
          <div className="connexion-top">
            <h1>Connexion au Casino</h1>
          </div>
          <div className="connexion-middle">
            <div className="connexion-email">
              <label htmlFor="email">
                <FontAwesomeIcon icon={faUser} />
              </label>
              <input
                id="email"
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="connexion-password">
              <label htmlFor="password">
                <FontAwesomeIcon icon={faUnlockKeyhole} />
              </label>
              <input
                id="password"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="connexion-bottom">
            <button>Entrer</button>
            <div className="connexion-wrapper">
              <p>Mot de passe oublié ? </p>
              <Link to="/reset-password">Reset password</Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login
