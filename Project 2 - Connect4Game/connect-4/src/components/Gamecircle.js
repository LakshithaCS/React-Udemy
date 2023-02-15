import React from 'react'
import '../Game.css'

const onClick = () => {
    alert('Click');
}

const Gamecircle = ({ id, children }) => {
    return (
        <div className='gameCircle' onClick={onClick} style={(id%2===0)? {backgroundColor: 'red'} : {backgroundColor: 'blue'} }>
            {children}
        </div>
    )
}

export default Gamecircle