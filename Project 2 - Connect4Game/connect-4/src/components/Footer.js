import React from 'react'
import { GAME_STATE_PLAYING } from '../Constants'
import '../Game.css'

const Footer = ({ onNewGameClick, onSuggestClick, gameState }) => {

  const renderButton = () => {
    if (gameState === GAME_STATE_PLAYING) {
      return <button onClick={onSuggestClick}>Suggest</button>;
    } else {
      return <button onClick={onNewGameClick}>New Game</button>;
    }
  }

  return (
    <div className='panel footer'>
      <div className='footer-text'>
        {renderButton()}
      </div>
    </div>
  )
}

export default Footer