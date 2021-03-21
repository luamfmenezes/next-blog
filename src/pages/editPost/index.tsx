import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../components/Header'

import { Container, Content } from './styles'

import localParamsStore from '../../stores/localPosts'
import { useRouter } from 'next/router'

interface PostFormParams {
    url: string
    title: string
    description: string
    content: string
    urlToImage: string
    author: string
}

const EditPost: React.FC = () => {
    const { query, push } = useRouter()
    const id = query.id as string

    const isUpdating = !!id

    const [post, setPost] = useState<PostFormParams>({
        author: '',
        content: '',
        description: '',
        title: '',
        urlToImage: '',
        url: '',
    })

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
            event.preventDefault()

            if (isUpdating) {
                localParamsStore.save({ ...post, id })
            } else {
                localParamsStore.create(post)
            }

            push('/')
        },
        [post, isUpdating]
    )

    const handleInputChange = (
        key: string,
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setPost(oldPost => ({ ...oldPost, [key]: event.target.value }))
    }

    useEffect(() => {
        if (isUpdating) {
            setPost(localParamsStore.findOne(id))
        }
    }, [isUpdating, id])

    return (
        <Container>
            <Header hasBackButton />
            <Content>
                <h1>{isUpdating ? 'Edit' : 'Create new '} article</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Title"
                        value={post.title}
                        onChange={e => handleInputChange('title', e)}
                    />
                    <input
                        placeholder="Description"
                        value={post.description}
                        onChange={e => handleInputChange('description', e)}
                    />
                    <input
                        placeholder="Author"
                        value={post.author}
                        onChange={e => handleInputChange('author', e)}
                    />
                    <input
                        placeholder="Image link"
                        value={post.urlToImage}
                        onChange={e => handleInputChange('urlToImage', e)}
                    />
                    <textarea
                        placeholder="Write your article here 👇"
                        value={post.content}
                        onChange={e => handleInputChange('content', e)}
                    />
                    <button>
                        {isUpdating ? 'Save article' : 'Create article'}
                    </button>
                </form>
            </Content>
        </Container>
    )
}

export default EditPost
