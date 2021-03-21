import React from 'react'

import { Container } from './styles'

import { FaPlus } from 'react-icons/fa'

const Header: React.FC = () => {
    return (
        <Container>
            <img src="/images/logo.png" alt="logo" />
            <button>
                <p>Write a local article</p>
                <div>
                    <FaPlus />
                </div>
            </button>
        </Container>
    )
}

export default Header
