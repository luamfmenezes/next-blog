import React from 'react'
import { FaUserAstronaut } from 'react-icons/fa'
import { Container, Content, Footer, User, UserIcon, UserInfo } from './styles'

interface Card {
    url: string
    title: string
    description: string
    content: string
    urlToImage: string
    author: string
}

interface CardParams {
    isLocal: boolean
    card: Card
}

const Card: React.FC<CardParams> = ({ card, isLocal }) => {
    const { author, content, url, title, urlToImage, description } = card

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
                        <h1>{author}</h1>
                        <p>3 days ago</p>
                    </UserInfo>
                </User>
                <button>Read More</button>
            </Footer>
        </Container>
    )
}

export default Card
