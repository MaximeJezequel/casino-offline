import React, { useEffect, useState } from "react"

import AliceCarousel from "react-alice-carousel"
import AliceItem from "./AliceItem"

import cards from "../data/cards"

import "./Alice.css"

const Alice = () => {
  const [items, setItems] = useState(cards.FR_EUR)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardItems, setCardItems] = useState([])

  const handleOnDragStart = (e) => e.preventDefault

  const handleOnClick = () => {
    if (items.length > 13) {
      setItems(items.filter((item) => item !== items[1]))
      setCurrentIndex(currentIndex + 1)
    }
  }

  useEffect(() => {
    const mapping = (items) => {
      setCardItems(
        items.map((item, index) => (
          <AliceItem
            index={index}
            item={item}
            items={items}
            setItems={setItems}
            handleOnClick={handleOnClick}
          />
        ))
      )
    }
    mapping(items)
  }, [items])

  return (
    <AliceCarousel
      items={cardItems}
      activeIndex={currentIndex}
      disableDotsControls
      disableButtonsControls
      onDragStart={handleOnDragStart}
      mouseTracking
      touchTracking
    />
  )
}

export default Alice
