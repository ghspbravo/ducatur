import React from 'react'
import navItem from './item'

export default (items) => {
    return (
        <ul style={{
            display: 'flex',
            width: '100vw',
            justifyContent: 'flex-end',
        }}>
            {items.map((item, i) => navItem(item, i))}
        </ul>
    )
}
