import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()
  const { signUpWithEmail } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await signUpWithEmail(email, password)
      navigate("/home")
    } catch (e) {
      setError(e.message)
    }
    error && alert(error)
  }

  return (
    <div>
      <h1>Sign up for free</h1>
      <p>
        Already have an account yet ? <Link to='/login'>Log in.</Link>
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label for='email'>Email Address</label>
          <input
            id='email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label for='password'>Password</label>
          <input
            id='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
