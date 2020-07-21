import React from 'react'
import './container.styles.css'

export const Container = props => {
    return (
        <section className="container">
            { props.children }
        </section>
    )
}