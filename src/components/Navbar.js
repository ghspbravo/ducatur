import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hovered: null,
        }
    }

    render() {
        return (
            <header style={{
                position: 'fixed',
                top: '6.2vh',
                right: '8.3vw',
                background: 'transparent',
                zIndex: '10',
                userSelect: 'none'
            }}>
                <ul style={{
                    display: 'flex',
                    width: '100vw',
                    justifyContent: 'flex-end',
                }}>
                    {this.props.items.map((item, index) => <li onMouseEnter={() => this.setState({hovered: index})} onMouseLeave={() => this.setState({hovered: null})} key={index} style={{
                        padding: '2.3vh 1.5vw',
                        margin: '0 1vw',
                        fontFamily: 'Arame Bold',
                        textTransform: 'uppercase',
                        borderRadius: '35px',
                        backgroundColor: index === this.state.hovered ? '#FF3923' : null,
                        cursor: "pointer",
                        transition: 'background-color 0.3s'
                    }}>
                        {item}
                    </li>)}
                </ul>
            </header>
        )
    }
}
