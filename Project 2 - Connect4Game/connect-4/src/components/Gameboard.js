import React, { useState } from "react";
import Gamecircle from "./Gamecircle";
import Header from "./Header";
import '../Game.css';
import Footer from "./Footer";

const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const Gameboard = () => {

    const [gameBoard, setGameBoard] = useState(Array(16).fill(0));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

    const initBoard = () => {
        const circles = []
        for (let i = 0; i < 16; i++) {
            circles.push(renderCircle(i));
        }
        return circles;
    }

    const click = (id) => {
        const board = [...gameBoard]
        board[id] = currentPlayer;

        setGameBoard(pre => {
            return pre.map((circle, pos) => {
                if (pos === id) return currentPlayer;
                return circle;
            })
        })

        setCurrentPlayer((currentPlayer === PLAYER_1) ? PLAYER_2 : PLAYER_1);
    }

    const renderCircle = (id) => {
        return (
            <Gamecircle key={id} id={id} onClick={click} className={`player_${gameBoard[id]}`}>
            </Gamecircle>
        )
    }

    return (
        <>
            <Header />
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer/>
        </>

    );
}

export default Gameboard;