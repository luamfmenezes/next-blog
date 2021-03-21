import Head from 'next/head'
import RemotePostList from '../components/RemotePostList'
import api from '../services/api'
import Header from '../components/Header'

import { Container, Content, PostHeader } from './index.styles'
import { useState } from 'react'
import SwitchPostType from '../components/SwitchPostType'
import SpotLight from '../components/SpotLight'

export default function Home({ initialRemotePosts }) {
    const [postFrom, setPostFrom] = useState<'local' | 'remote'>('remote')

    return (
        <div>
            <Head>
                <title>'Next blog'</title>
            </Head>
            <Container>
                <Header />
                <SpotLight post={initialRemotePosts[1]} />
                <PostHeader>
                    <h1>Articles</h1>
                    <SwitchPostType value={postFrom} onChange={setPostFrom} />
                </PostHeader>
                <Content>
                    <RemotePostList initialPosts={initialRemotePosts} />
                </Content>
            </Container>
        </div>
    )
}

export async function getStaticProps() {
    const response = await api.get('/')
    const initialRemotePosts = response.data.articles
    return {
        props: {
            initialRemotePosts,
        },
    }
}
