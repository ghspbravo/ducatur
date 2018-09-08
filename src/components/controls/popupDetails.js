import React from 'react'

import el_big from '../../resourses/popup/Ellipse big.svg';
import el_mid from '../../resourses/popup/Ellipse mid.svg';
import el_small from '../../resourses/popup/Ellipse small.svg';

export default (event = null, text = null) => {
    return (
        <div style={{
            position: "absolute",
            top: '10vh',
            left: '50vw',
            height: '14vw',
            width: '24.7vw',
        }}>
            <div style={{ position: 'relative', padding: '1.8vw 2.76vw 2vw 3.125vw', width: '100%', height: '100%' }}>
                <img style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} src={el_big} alt="el_big" />
                <div style={{ position: 'relative', zIndex: 3, padding: '2.8vw 2vw 2.7vw 1.7vw', width: '100%', height: '100%' }}>
                    <img style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '-1' }} src={el_mid} alt="el_mid" />
                    <p style={{ fontFamily: 'Din Pro Medium', fontSize: '1vw', color: 'white', textAlign: 'center', lineHeight: '1.5'}}>{text}</p>
                </div>
                <img style={{ position: 'absolute', bottom: '-1vw', left: '6.5vw', zIndex: 2, transform: 'rotate(-5.68deg)', width: '4.6vw' }} src={el_small} alt="el_small" />
            </div>
        </div>
    )
}
