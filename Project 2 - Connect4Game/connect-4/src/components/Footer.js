import React from 'react'
import '../Game.css'

const Footer = ({ onNewGameClick, onSuggestClick }) => {
  return (
    <div className='panel footer'>
      <div className='footer-text'>
        <button onClick={onNewGameClick}>New Game</button>
        <button onClick={onSuggestClick}>Suggest</button>
      </div>
    </div>
  )
}

export default Footer