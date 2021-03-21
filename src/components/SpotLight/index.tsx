import React from 'react'

import { Container, Content, Star } from './styles'

import { FaStar } from 'react-icons/fa'

interface Post {
    url: string
    title: string
    description: string
    content: string
    urlToImage: string
    author: string
    publishedAt: string
}

interface SpotLightParams {
    post: Post
}

const SpotLight: React.FC<SpotLightParams> = ({ post }) => {
    return (
        <Container>
            <img src={post.urlToImage} alt={post.title} />
            <Content>
                <Star>
                    <FaStar size={12} />
                    <p>SpotLigth</p>
                </Star>
                <h1>{post.title}</h1>
            </Content>
        </Container>
    )
}

export default SpotLight
