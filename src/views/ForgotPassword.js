import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
      alert(
        "Oups, il y a eu un problème ! Veuillez vérifier l'adresse email saisie."
      )
    }
  }

  useEffect(() => {
    if (user?.email) {
      navigate("/")
    }
  })

  return (
    <main>
      <div className='connexion'>
        <form onSubmit={handleSubmit}>
          <div className='connexion-top'>
            <h1>Mot de passe oublié</h1>
          </div>
          <div className='connexion-middle'>
            <div className='connexion-email'>
              <label htmlFor='email'>
                <FontAwesomeIcon icon={faUser} />
              </label>
              <input
                id='email'
                type='email'
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='connexion-bottom'>
            <button>Envoyer</button>
            <div className='connexion-wrapper'>
              <p>J'ai retrouvé la mémoire... </p>
              <Link to='/login'>Log in</Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default ForgotPassword
