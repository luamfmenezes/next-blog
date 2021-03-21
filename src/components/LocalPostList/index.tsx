import React, { useEffect, useState } from 'react'
import { LocalPost } from '../../stores/localPosts'
import Card from '../Card'
import storeLocalPosts from '../../stores/localPosts'

import { Container, Content } from './styles'

interface LocalPostListParams {}

const LocalPostList: React.FC<LocalPostListParams> = () => {
    const [posts, setPosts] = useState<LocalPost[]>([])

    useEffect(() => {
        setPosts(storeLocalPosts.findAll())
    }, [])

    return (
        <Container>
            <Content>
                {posts.map(post => (
                    <Card post={post} isLocal key={post.id} />
                ))}
            </Content>
        </Container>
    )
}

export default LocalPostList
