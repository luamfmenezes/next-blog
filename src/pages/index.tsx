import Head from 'next/head'
import RemotePostList from '../components/RemotePostList'
import api from '../services/api'
import Header from '../components/Header'

import { Container, Content, PostHeader } from './index.styles'
import { useState } from 'react'
import SwitchPostType from '../components/SwitchPostType'
import SpotLight from '../components/SpotLight'
import LocalPostList from '../components/LocalPostList'

export default function Home({ initialRemotePosts }) {
    const [postFrom, setPostFrom] = useState<'local' | 'remote'>('remote')

    return (
        <div>
            <Head>
                <title>'Next blog'</title>
            </Head>
            <Container>
                <Header />
                <SpotLight post={initialRemotePosts[0]} />
                <PostHeader>
                    <h1>Articles</h1>
                    <SwitchPostType value={postFrom} onChange={setPostFrom} />
                </PostHeader>
                <Content>
                    {postFrom === 'local' ? (
                        <LocalPostList />
                    ) : (
                        <RemotePostList initialPosts={initialRemotePosts} />
                    )}
                </Content>
            </Container>
        </div>
    )
}

export async function getStaticProps() {
    const response = await api.get('/', {
        params: {
            q: 'technology',
            apiKey: '36d0e2c067b647c09af0a0c459da42ad',
            pageSize: 8,
        },
    })
    const initialRemotePosts = response.data.articles
    return {
        props: {
            initialRemotePosts,
        },
    }
}
