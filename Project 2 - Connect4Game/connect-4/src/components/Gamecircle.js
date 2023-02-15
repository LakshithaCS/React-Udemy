import React from 'react'
import '../Game.css'

const onClick = () => {
    alert('Click');
}

const Gamecircle = ({ id, children }) => {
    return (
        <div className={`gameCircle ${(id % 2 === 0) ? 'even' : 'odd'}`} onClick={onClick}>
            {children}
        </div>
    )
}

export default Gamecircle