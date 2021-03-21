import Head from 'next/head'
import RemotePostList from '../components/RemotePostList'
import api from '../services/api'
import Header from '../components/Header'

import { Container, Content } from './index.styles'

export default function Home({ initialRemotePosts }) {
    return (
        <div>
            <Head>
                <title>'Next blog'</title>
            </Head>
            <Container>
                <Header />
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
