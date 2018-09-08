import React, { Component } from 'react'

export default class SideNavigation extends Component {

    render() {
        return (
            <nav style={{ position: 'fixed', top: '50%', right: '50px', transform: 'translateY(-50%)', zIndex: '10' }}>
                <div style={{
                    fontFamily: 'Arame Regular',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ fontSize: this.props.index === 0 ? '1.5rem' : '0.875rem' }}>CITY</p>
                        <hr style={{ width: '50px', border: '1px solid white', margin: '0 20px' }} />
                        <p style={{ fontSize: this.props.index === 0 ? '1.5rem' : '0.875rem' }}>01</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '9vh' }}>
                        <p style={{ fontSize: this.props.index === 1 ? '1.5rem' : '0.875rem' }}>PRODUCT FLOW</p>
                        <hr style={{ width: '50px', border: '1px solid white', margin: '0 20px' }} />
                        <p style={{ fontSize: this.props.index === 1 ? '1.5rem' : '0.875rem' }}>02</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '9vh' }}>
                        <p style={{ fontSize: this.props.index === 2 ? '1.5rem' : '0.875rem' }}>DOCTRINE</p>
                        <hr style={{ width: '50px', border: '1px solid white', margin: '0 20px' }} />
                        <p style={{ fontSize: this.props.index === 2 ? '1.5rem' : '0.875rem' }}>03</p>
                    </div>
                </div>
            </nav>
        )
    }
}
