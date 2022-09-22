import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")

  const navigate = useNavigate()
  const { user, resetPassword } = UserAuth()

  const handleSubmit = async () => {
    try {
      await resetPassword(email)
      navigate("/login")
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
        <h1>Mot de passe oublié</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button>Envoyer</button>
          <p>
            J'ai retrouvé la mémoire...{" "}
            <Link
              style={{
                color: "white",
              }}
              to="/login"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </main>
  )
}

export default ForgotPassword
