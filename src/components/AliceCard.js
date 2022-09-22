import React from "react"

import "./AliceCard.css"

import frame from "../assets/frame.png"
import frame2 from "../assets/frame90.png"

const AliceCard = ({ item, newIndex }) => {
  return (
    <div key={newIndex} className={"card"}>
      <img className="card-img top" src={frame} alt="frame" />
      <img className="card-img bottom" src={frame} alt="frame" />
      <img className="card-img left" src={frame2} alt="frame2" />
      <img className="card-img right" src={frame2} alt="frame2" />
      {newIndex > 0 && <h2 className="card-tag">{newIndex}</h2>}
      <h2 className="card-text">
        <span className="card-span">{item.line1}</span>
        <span className="card-span">{item.line2}</span>
        <span className="card-span">{item.line3}</span>
      </h2>
      {newIndex > 0 && <div className={`card-token hotel${newIndex}`}></div>}
    </div>
  )
}

export default AliceCard
