import React from 'react';
import '../Game.css';
import { GAME_STATE_DRAW, GAME_STATE_IDLE, GAME_STATE_WIN, GAME_STATE_PLAYING, PLAYER_1, PLAYER_2, NO_PLAYER } from "../Constants";

const Header = ({ gameState, winPlayer, currentPlayer }) => {

  //console.log(currentPlayer);

  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_DRAW:
        return <div>Game Is A Draw</div>;
      case GAME_STATE_PLAYING:
        return <div> Player {currentPlayer} Turn</div>;
      case GAME_STATE_WIN:
        return <div> Player {winPlayer} Wins</div>;
    }
  }
  return (
    <div className='panel header'>
      <div className='header-text'>
        {renderLabel()}
      </div>
    </div>
  )
}

export default Header