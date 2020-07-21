import React from 'react'
import './card.styles.css'

export const Card = props => (
    <div className="card">
        <h2 className="title">{props.title}</h2>
        <div className="body">
            {props.body}
        </div>
        {/* <p>{props.body}</p> */}
    </div>
)