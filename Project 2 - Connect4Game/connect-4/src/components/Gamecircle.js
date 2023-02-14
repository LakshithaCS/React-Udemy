import React from 'react'

const onClick = () => {
    alert('Click');
}

const Gamecircle = ({id, color, children}) => {
    return (
        <div onClick={onClick} style={{color:color}}>
            {children}
        </div>
    )
}

export default Gamecircle