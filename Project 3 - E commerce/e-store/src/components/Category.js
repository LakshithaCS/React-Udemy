import React from 'react'

const category = ({ id, title, onCategoryClick }) => {
    return (
        <div key={id} onClick={() => onCategoryClick(id)}>
            {title}
        </div>
    )
}

export default category