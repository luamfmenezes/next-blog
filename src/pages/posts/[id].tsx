import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import localPostsStore from '../../stores/localPosts'
import Header from '../../components/Header'

import { Container, Content, Infos } from './styles'
import AuthorAndDateContainer from '../../components/AuthorAndDateContainer'
import Link from 'next/link'
import { FaEdit } from 'react-icons/fa'

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

export default function Post() {
    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState<Post | undefined>()

    useEffect(() => {
        if (id) {
            const response = localPostsStore.findOne(id as string)
            setPost(response)
        }
    }, [id])

    return (
        <Container>
            <Head>
                <title>Post</title>
            </Head>
            <Header hasBackButton />
            <Content>
                {post ? (
                    <>
                        <h1>{post.title}</h1>
                        <Infos>
                            <AuthorAndDateContainer
                                author={post.author}
                                publishedAt={post.publishedAt}
                            />
                            <Link
                                href={{ pathname: '/editPost', query: { id } }}
                            >
                                <button>
                                    <FaEdit />
                                </button>
                            </Link>
                        </Infos>
                        <img src={post.urlToImage} alt={post.title} />
                        <article>{post.content}</article>
                    </>
                ) : (
                    <p>Loading</p>
                )}
            </Content>
        </Container>
    )
}
