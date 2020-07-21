import React from 'react'
import {Container} from '../container/container.component'
import './header.styles.css'
import logo from '../../logo-white.png'

export const Header = () => {
    return (
        <header>
            <Container>
                <nav className="navbar">
                    <a href="/">
                        <img className="navbar-brand" src={logo} alt=""/>
                    </a>
                </nav>
            </Container>
        </header>
    )
}