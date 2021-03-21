import React from 'react'
import { Container, Content, Footer, Controllers } from './styles'
import Link from 'next/link'
import { FaEdit } from 'react-icons/fa'
import AuthorAndDateContainer from '../AuthorAndDateContainer'

interface Post {
    id?: string
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
        url,
        id,
    } = post

    return (
        <Container>
            <img src={urlToImage} alt={content} />
            <Content>
                <h1>{title}</h1>
                <p>{description}</p>
            </Content>
            <Footer>
                <AuthorAndDateContainer
                    author={author}
                    publishedAt={publishedAt}
                />
                <Controllers>
                    <Link href={isLocal ? `/posts/${id}` : url}>
                        Read article
                    </Link>
                    {isLocal && (
                        <Link href={{ pathname: '/editPost', query: { id } }}>
                            <button>
                                <FaEdit size={16} />
                            </button>
                        </Link>
                    )}
                </Controllers>
            </Footer>
        </Container>
    )
}

export default Card
