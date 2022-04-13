import React from 'react'
import { Container } from 'react-bootstrap'

function Header() {
    return (
        <div className="header-wrapper">
            <header>Header 
                <main className="py-3">
                    <Container>
                    <h1>Swift Stitch Upholstery</h1>
                    </Container>
                </main>
            </header>
        </div>
    )
}

export default Header
