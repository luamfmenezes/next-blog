import React from 'react'

import { Container } from './styles'

const Header: React.FC = () => {
    return (
        <Container>
            <img src="/images/logo.png" alt="logo" />
            <h1>created by luam</h1>
        </Container>
    )
}

export default Header
