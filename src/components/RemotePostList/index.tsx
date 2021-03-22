import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Card from '../Card'
import Loading from '../Loading'

import { Container } from './styles'

interface Post {
    url: string
    title: string
    description: string
    content: string
    urlToImage: string
    author: string
    publishedAt: string
}

interface RemotePostListParams {
    initialPosts: Post[]
}

const RemotePostList: React.FC<RemotePostListParams> = ({ initialPosts }) => {
    const [posts, setPosts] = useState<Post[]>(initialPosts)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const loadMorePosts = async () => {
            setLoading(true)
            const params = {
                q: 'technology',
                apiKey: '36d0e2c067b647c09af0a0c459da42ad',
                page,
                pageSize: 8,
            }

            const response = await api.get('/', {
                params,
            })

            const newPosts = response.data.articles
            setPosts(oldPosts => [...oldPosts, ...newPosts])
            setLoading(false)
        }
        if (page > 1) {
            loadMorePosts()
        }
    }, [page])

    const handleNextPage = () => setPage(page + 1)

    const handleScroll = () => {
        const isBottom =
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 1

        if (isBottom) {
            handleNextPage()
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <Container data-testid="remote-post-list-container">
            {posts.map(post => (
                <Card post={post} isLocal={false} key={post.url} />
            ))}
            {loading && <Loading />}
        </Container>
    )
}

export default RemotePostList
