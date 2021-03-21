import React from 'react'
import { FaUserAstronaut } from 'react-icons/fa'
import { Container, Content, Footer, User, UserIcon, UserInfo } from './styles'
import { formatRelative } from 'date-fns'

interface Post {
    url: string
    title: string
    description: string
    content: string
    urlToImage: string
    author: string
    publishedAt: string
}

interface CardParams {
    isLocal: boolean
    post: Post
}

const Card: React.FC<CardParams> = ({ post, isLocal }) => {
    const {
        author,
        content,
        publishedAt,
        title,
        urlToImage,
        description,
    } = post

    const formatedDate = formatRelative(new Date(publishedAt), new Date())

    return (
        <Container>
            <img src={urlToImage} alt={content} />
            <Content>
                <h1>{title}</h1>
                <p>{description}</p>
            </Content>
            <Footer>
                <User>
                    <UserIcon>
                        <FaUserAstronaut color="#fff" size={16} />
                    </UserIcon>
                    <UserInfo>
                        <h1>{author ? author : 'Anonymous'}</h1>
                        <p>{formatedDate}</p>
                    </UserInfo>
                </User>
                <button>Read More</button>
            </Footer>
        </Container>
    )
}

export default Card
