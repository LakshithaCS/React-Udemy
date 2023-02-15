import React, { useState } from "react";
import Gamecircle from "./Gamecircle";
import '../Game.css';

const Gameboard = () => {

    const [gameBoard, setGameBoard] = useState(Array(16).fill(0));
    const click = (id) => {
        gameBoard[id] = 1;
        setGameBoard(gameBoard);
    }

    return (
        <div className="gameBoard">
            <Gamecircle id={1} onClick={click} className="player_1">
            </Gamecircle>
            <Gamecircle id={2} onClick={click} className="player_2">
            </Gamecircle>
            <Gamecircle id={3} onClick={click}>
            </Gamecircle>
            <Gamecircle id={4} onClick={click}>
            </Gamecircle>
            <Gamecircle id={5} onClick={click}>
            </Gamecircle>
            <Gamecircle id={6} onClick={click}>
            </Gamecircle>
            <Gamecircle id={7} onClick={click}>
            </Gamecircle>
            <Gamecircle id={8} onClick={click}>
            </Gamecircle>
            <Gamecircle id={9} onClick={click}>
            </Gamecircle>
            <Gamecircle id={10} onClick={click}>
            </Gamecircle>
            <Gamecircle id={11} onClick={click}>
            </Gamecircle>
            <Gamecircle id={12} onClick={click}>
            </Gamecircle>
            <Gamecircle id={13} onClick={click}>
            </Gamecircle>
            <Gamecircle id={14} onClick={click}>
            </Gamecircle>
            <Gamecircle id={15} onClick={click}>
            </Gamecircle>
            <Gamecircle id={16} onClick={click}>
            </Gamecircle>
        </div>
    );
}

export default Gameboard;