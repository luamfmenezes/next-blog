import Head from 'next/head'
import Card from '../components/Card'

const data = {
    author: 'Michael J. Coren',
    title: 'Elon Musk’s vision board for Tesla’s future',
    description:
        'This definitely real vision board contains all the things Elon Musk has been dreaming up for his electric car company (and beyond).',
    url:
        'https://cms.qz.com/wp-content/uploads/2021/03/elons_vision_board.gif?quality=75&strip=all&w=1200&h=630&crop=1',
    urlToImage:
        'https://cms.qz.com/wp-content/uploads/2021/03/elons_vision_board.gif?quality=75&strip=all&w=1200&h=630&crop=1',
    publishedAt: '2021-03-21T14:08:24Z',
    content:
        'Most of us dont see the future like Elon Musk. Early in life, the Tesla CEO said he grew obsessed with electric cars, artificial intelligence, clean energy, and software. I like to make technologies … [+418 chars]',
}

export default function Home({ firstPosts }) {
    return (
        <div>
            <Head>
                <title>'Next blog'</title>
            </Head>
            <main>
                <h1>hello world</h1>

                <Card card={data} isLocal={false} />
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const firstPosts = [{ post: 1 }]
    return {
        props: {
            firstPosts,
        },
    }
}
