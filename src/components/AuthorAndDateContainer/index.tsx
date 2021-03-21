import { formatRelative } from 'date-fns'
import React from 'react'
import { FaUserAstronaut } from 'react-icons/fa'

import { Container, Icon, Info } from './styles'

interface AuthorAndDateContainerParams {
    publishedAt: string
    author: string
}

const AuthorAndDateContainer: React.FC<AuthorAndDateContainerParams> = ({
    publishedAt,
    author,
}) => {
    const formatedDate = formatRelative(new Date(publishedAt), new Date())

    return (
        <Container>
            <Icon>
                <FaUserAstronaut color="#fff" size={16} />
            </Icon>
            <Info>
                <h1>{author ? author : 'Anonymous'}</h1>
                <p>{formatedDate}</p>
            </Info>
        </Container>
    )
}

export default AuthorAndDateContainer
