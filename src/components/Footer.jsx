import React from 'react'

const year = new Date().getFullYear()

const Footer = () => {
    return (
        <footer>
            <p>copywrite {year}</p>
        </footer>
    )
}

export default Footer