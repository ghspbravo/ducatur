import React from 'react'
import name from '../../resourses/Name.svg'
import logo from '../../resourses/Logo.svg'

export default () => {
    return (
        <div>
            <img src={logo} alt="logo"/>
            <img src={name} alt="brandName"/>
        </div>
    )
}
