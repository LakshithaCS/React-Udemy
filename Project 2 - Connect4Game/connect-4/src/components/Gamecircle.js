import React from 'react'
import '../Game.css'

const onClick = () => {
    alert('Click');
}

const Gamecircle = ({ id, onClick, className, children }) => {
    return (
        <div className={`gameCircle ${className}`} onClick={() => onClick(id)}>
            {children}
        </div>
    )
}

export default Gamecircle