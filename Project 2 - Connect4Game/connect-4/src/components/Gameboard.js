import React from "react";
import Gamecircle from "./Gamecircle";

const Gameboard = () => {

    const style = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr',
        width: '500px',
        position: 'absolute',
        left:'50%',
        marginLeft: '-250px',
        top: '50%',
        marginTop: '-250px'

    }

    return (
        <div style={style}>
            <Gamecircle id={1} color={'red'}>
            </Gamecircle>
            <Gamecircle id={1} color={'blue'}>
            </Gamecircle>
            <Gamecircle id={1} color={'red'}>
            </Gamecircle>
            <Gamecircle id={1} color={'blue'}>
            </Gamecircle>
            <Gamecircle id={1} color={'red'}>
            </Gamecircle>
            <Gamecircle id={1} color={'blue'}>
            </Gamecircle>
            <Gamecircle id={1} color={'red'}>
            </Gamecircle>
            <Gamecircle id={1} color={'blue'}>
            </Gamecircle>
            <Gamecircle id={1} color={'red'}>
            </Gamecircle>
            <Gamecircle id={1} color={'blue'}>
            </Gamecircle>
            <Gamecircle id={1} color={'red'}>
            </Gamecircle>
            <Gamecircle id={1} color={'blue'}>
            </Gamecircle>
            <Gamecircle id={1} color={'red'}>
            </Gamecircle>
            <Gamecircle id={1} color={'blue'}>
            </Gamecircle>
            <Gamecircle id={1} color={'red'}>
            </Gamecircle>
            <Gamecircle id={1} color={'blue'}>
            </Gamecircle>
        </div>
    );
}

export default Gameboard;