import React from "react"

import AliceCard from "./AliceCard"
import AliceLogo from "./AliceLogo"

import logo from "../assets/casino_spin.png"

const AliceItem = ({ index, item, items, setItems, handleOnClick }) => {
  const newIndex = index + 13 - items.length

  return !index ? (
    <AliceLogo
      key={index}
      logo={logo}
      item={item}
      setItems={setItems}
      handleOnClick={handleOnClick}
    />
  ) : (
    <AliceCard item={item} newIndex={newIndex} />
  )
}

export default AliceItem
