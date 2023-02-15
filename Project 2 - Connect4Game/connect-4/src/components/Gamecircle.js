import React from 'react'

const onClick = () => {
    alert('Click');
}

const Gamecircle = ({ id, color, children }) => {
    const style = {
        backgroundColor: color,
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: '50%'
    }

    return (
        <div onClick={onClick} style={style}>
            {children}
        </div>
    )
}

export default Gamecircle