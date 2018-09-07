import React, { Component } from 'react'

export default class Section extends Component {
    render() {
        return (
            <section style={{...this.props.style}}>
                {this.props.children}
            </section>
        )
    }
}
