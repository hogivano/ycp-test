import React from 'react'
import './container.styles.css'

export const Container = props => {
    return (
        <main className="container">
            { props.children }
        </main>
    )
}