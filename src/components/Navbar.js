import React, { Component } from 'react'
import navItemsContainer from './navbar/itemsContainer';

export default class Navbar extends Component {
    render() {
        return (
            <header style={{
                position: 'fixed',
                top: '20px',
                left: 0,
                background: 'transparent',
                zIndex: '10'
            }}>
                
                {navItemsContainer(this.props.items)}
            </header>
        )
    }
}
