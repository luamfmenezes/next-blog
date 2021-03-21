import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Container, Logo, BackButton, WriteArticleButton } from './styles'

import { FaArrowLeft, FaPlus } from 'react-icons/fa'

interface HeaderParams {
    hasBackButton?: boolean
}

const Header: React.FC<HeaderParams> = ({ hasBackButton }) => {
    const { back } = useRouter()
    return (
        <Container>
            <Logo>
                <Link href="/">
                    <img src="/images/logo.png" alt="logo" />
                </Link>
                {hasBackButton && (
                    <BackButton onClick={back}>
                        <FaArrowLeft />
                    </BackButton>
                )}
            </Logo>

            <Link href="/editPost">
                <WriteArticleButton>
                    <p>Write a local article</p>
                    <div>
                        <FaPlus />
                    </div>
                </WriteArticleButton>
            </Link>
        </Container>
    )
}

export default Header
