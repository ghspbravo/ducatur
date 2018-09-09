import React, { Component } from 'react'

import brand from "../resourses/Logo_Brand.svg";
import world from '../resourses/Worlds.png';
import signButton from './controls/signButton';
import social from './controls/social';
import scroll from './controls/scroll';

import background from '../resourses/header.png'

export default class Main extends Component {
    render() {
        return (
            <section style={{ height: '100vh', padding: window.innerHeight  > 992 ? '31vh 6.25vw 0 6.25vw' : '20vh 6.25vw 0 6.25vw', position: 'relative', backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                <img src={brand} alt="brand" style={{
                    height: window.innerWidth < 1980 ? '17.5vh' : '10vw',
                    userSelect: 'none',
                    zIndex: '5',
                    position: 'relative'
                }} />
                <p style={{
                    fontFamily: 'Din Pro Medium',
                    fontSize: '1.875rem',
                    marginBottom: '9.6vh',
                    marginTop: '3.7vh',
                    lineHeight: window.innerWidth < 576 ? '1' : '2',
                    position: 'relative',
                    zIndex: '5'
                }}>DECENTRALIZING THR INTERACTION 
                <br/> BETWEEN THE TECHNOLOGY AND THE WORLD</p>
                <div style={{marginTop: '3.7vh', position: 'relative', zIndex: '5'}}>
                    {signButton()}
                </div>
                <div style={{marginTop: '14.8vh', position: 'relative', zIndex: '5'}}>
                    {social()}
                </div>
                <img src={world} alt="world" style={{
                    height: '64.8vh',
                    width: '36.4vw',
                    objectFit: 'contain',
                    position: 'absolute',
                    right: '9.3vw',
                    top: '17.6vh',
                    userSelect: 'none',
                    zIndex: '5'
                }} />
                {scroll()}
            </section>
        )
    }
}
