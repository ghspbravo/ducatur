import React from 'react'

export default (item, index) => {
    return (
        <li key={index} style={{
            padding: '2vh 2vw',
        }}>
            {item}
        </li>
    )
}
