import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <section className="search-box">
            <label>
                <b>
                Search This Magic!
                </b>
            </label>
            <input placeholder={placeholder} onChange={handleChange} />
        </section>
    )
}