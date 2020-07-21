import React from 'react'
import './card-list.styles.css'

export const CardList = props => (
    <section className="card-list col-7">
         {props.children}
    </section>
)