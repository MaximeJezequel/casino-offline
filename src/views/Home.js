import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

import wzrd from "../assets/wizard.png"

const Home = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      await logOut()
      navigate("/login")
      console.log("You are logged out")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <h1>Home</h1>
      <img src={wzrd} alt='wizard' style={{ width: "30%" }} />
      <p>User Name: {user && user.displayName}</p>
      <p>User Email: {user && user.email}</p>
      <button onClick={() => handleLogOut()}>Log out</button>
      <Link to='/'>Casino</Link>
    </div>
  )
}

export default Home
