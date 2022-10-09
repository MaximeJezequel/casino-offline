import { useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

import lasvegas from "../assets/casino_las-vegas.png"
import cards from "../data/cards"

import "./AliceLogo.css"

const AliceLogo = ({ index, logo, item, handleOnClick, setItems }) => {
  const { logOut } = UserAuth()
  const navigate = useNavigate()

  const restart = (e) => {
    e.preventDefault()
    window.location.reload(false)
  }

  const handleSelectChange = (e) => {
    setItems(cards[e.target.value])
    console.log(`Language changed to ${e.target.value}`)
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
      <select onChange={(e) => handleSelectChange(e)}>
        <option value="FR">FR</option>
        <option value="EN">EN</option>
      </select>
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
        onClick={() => handleOnClick()}
      />
      <p className="alice-logo-subtxt">{item.line3}</p>
      <p className="alice-logo-logout" onClick={() => handleLogOut()}>
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-log-out"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </p>
    </div>
  )
}

export default AliceLogo
