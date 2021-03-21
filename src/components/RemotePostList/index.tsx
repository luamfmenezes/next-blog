import React, { useCallback, useEffect, useState } from 'react'
import api from '../../services/api'
import Card from '../Card'

import { Container } from './styles'

interface Post {
    url: string
    title: string
    description: string
    content: string
    urlToImage: string
    author: string
}

interface RemotePostListParams {
    initialPosts: Post[]
}

const RemotePostList: React.FC<RemotePostListParams> = ({ initialPosts }) => {
    const [posts, setPosts] = useState<Post[]>(initialPosts)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const loadMorePosts = async () => {
            const params = {
                q: 'bitcoin',
                apiKey: '36d0e2c067b647c09af0a0c459da42ad',
                page,
            }

            const response = await api.get('/', {
                params,
            })

            const newPosts = response.data.articles
            setPosts(oldPosts => [...oldPosts, ...newPosts])
        }
        if (page > 1) {
            loadMorePosts()
        }
    }, [page])

    const handleNextPage = useCallback(() => {
        if (page < 10) {
            setPage(page + 1)
        }
    }, [page])

    return (
        <Container>
            {posts.map(post => (
                <Card post={post} isLocal={false} key={post.url} />
            ))}
            <button onClick={handleNextPage}>Load more</button>
        </Container>
    )
}

export default RemotePostList
