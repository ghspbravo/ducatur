import React, { Component } from 'react'
import navItemsContainer from './navbar/itemsContainer';

export default class Navbar extends Component {
    render() {
        return (
            <header style={{
                position: 'fixed',
                top: '6.2vh',
                right: '8.3vw',
                background: 'transparent',
                zIndex: '10'
            }}>
                {navItemsContainer(this.props.items)}
            </header>
        )
    }
}
