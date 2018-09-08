import React, { Component } from 'react'

import city from '../resourses/City_stage.png';
import popupDetails from './controls/popupDetails';

export default class City extends Component {
    render() {
        return (
            <section style={{marginTop: '20vw', position: 'relative', textAlign: 'center'}}>
                <img src={city} alt="city"/>
                {popupDetails(null, 'XD is made for fast, fluid UX design with innovative tools that eliminate speed bumps.')}
            </section>
        )
    }
}
