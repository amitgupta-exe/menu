import React from 'react'

const CategoryButton = ({tag, getItem}) => {
    
    return (
        <div>
            <button  onClick={() => getItem(tag.toLowerCase())} >{tag}</button>
        </div>
    )
}

export default CategoryButton
