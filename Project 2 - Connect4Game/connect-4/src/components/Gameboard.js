import React, { useEffect, useState } from "react";
import Gamecircle from "./Gamecircle";
import Header from "./Header";
import '../Game.css';
import Footer from "./Footer";
import { guessMove, isDraw, isWinner } from "./helper";
import { GAME_STATE_DRAW, GAME_STATE_IDLE, GAME_STATE_WIN, GAME_STATE_PLAYING, PLAYER_1, PLAYER_2, NO_PLAYER } from "../Constants";


const Gameboard = () => {

    const [gameBoard, setGameBoard] = useState(Array(16).fill(0));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
    const [winPlayer, setWinPlayer] = useState(NO_PLAYER);

    useEffect(() => {
        initGame();
    }, [])

    const suggestMove = () => {
        const r = guessMove(gameBoard);
        click(r);
    }

    const initGame = () => {
        setGameBoard(Array(16).fill(0));
        setCurrentPlayer(PLAYER_1);
        setGameState(GAME_STATE_PLAYING);
        setWinPlayer(NO_PLAYER);
    }

    const initBoard = () => {
        const circles = []
        for (let i = 0; i < 16; i++) {
            circles.push(renderCircle(i));
        }
        return circles;
    }

    const click = (id) => {

        if (gameBoard[id] !== 0) return;
        if (gameState != GAME_STATE_PLAYING) return;

        if (isWinner(gameBoard, id, currentPlayer)) {
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);
        }

        if (isDraw(gameBoard, id, currentPlayer)) {
            setGameState(GAME_STATE_DRAW);
            setWinPlayer(NO_PLAYER);
        }

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
            <Header gameState={gameState} winPlayer={winPlayer} currentPlayer={currentPlayer} />
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} gameState={gameState} />
        </>

    );
}

export default Gameboard;