import React from 'react'

const Footer = () => {
    return (
        <div 
        className="d-flex w-100 justify-content-center" 
        style={{ 
            position: 'absolute',
            left: '0',
            bottom: '0'
            }}>
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <span className="text-muted">Purrfect Match © 2023 Pod1-Project 3 ❤️ </span>
                <span className="text-muted">Contact us <a href='https://github.com/Kayla-Sullens/Purrfect-Match.git'>Github</a></span>
            </div>
        </footer>
    </div>
    
    )
}

export default Footer