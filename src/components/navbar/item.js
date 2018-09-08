import React from 'react'

export default (item, index) => {
    return (
        <li key={index} style={{
            padding: '2.3vh 1.5vw',
            margin: '0 1vw',
            fontFamily: 'Arame Bold',
            textTransform: 'uppercase',
            borderRadius: '35px',
            backgroundColor: index === 5 ? '#FF3923' : null,
        }}>
            {item}
        </li>
    )
}
