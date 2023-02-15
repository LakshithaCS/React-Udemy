import React from 'react'
import '../Game.css'

const onClick = () => {
    alert('Click');
}

const Gamecircle = ({ id, color, children }) => {
    const style = {
        backgroundColor: color,
    }

    return (
        <div className='gameCircle' onClick={onClick} style={style}>
            {children}
        </div>
    )
}

export default Gamecircle