import { useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

import lasvegas from "../assets/casino_las-vegas.png"
import "./AliceLogo.css"

const AliceLogo = ({ index, logo, item, handleOnClick }) => {
  const { logOut } = UserAuth()
  const navigate = useNavigate()

  const restart = (e) => {
    e.preventDefault()
    window.location.reload(false)
  }

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
    <div className="alice-logo" key={index}>
      <img
        src={logo}
        className="alice-logo-img"
        alt="logo"
        onClick={(e) => restart(e)}
      />
      <img
        src={lasvegas}
        className="alice-logo-vegas"
        alt="las vegas"
        onClick={(e) => handleOnClick()}
      />
      <p className="alice-logo-subtxt">{item.line3}</p>
      <p className="alice-logo-logout" onClick={() => handleLogOut()}>
        Log out
      </p>
    </div>
  )
}

export default AliceLogo
