import React from "react";
import Gamecircle from "./Gamecircle";

const Gameboard = () => {
    return (
        <div>
            <Gamecircle id={1}color={'red'}>
                RED
            </Gamecircle>
            <Gamecircle id={2} />
            <Gamecircle id={3} />
            <Gamecircle id={4} />
            <Gamecircle id={5} />
            <Gamecircle id={6} />
            <Gamecircle id={7} />
            <Gamecircle id={8} />
            <Gamecircle id={9} />
        </div>
    );
}

export default Gameboard;