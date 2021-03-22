import { v4 } from 'uuid'

export interface LocalPost {
    id: string
    url: string
    title: string
    description: string
    content: string
    urlToImage: string
    author: string
    publishedAt: string
}

export type AddLocalPostParams = {
    url: string
    title: string
    description: string
    content: string
    urlToImage: string
    author: string
}

export type SaveLocalPostParams = Omit<LocalPost, 'publishedAt'>

class LocalPosts {
    private readonly storageKey = '@next-blog/posts'

    findAll(): LocalPost[] {
        const posts = localStorage.getItem(this.storageKey)
        return posts ? JSON.parse(posts) : []
    }

    findOne(id: string): LocalPost {
        const posts = JSON.parse(localStorage.getItem(this.storageKey) || '[]')
        return posts ? posts.find(el => el.id == id) : undefined
    }

    save(postData: SaveLocalPostParams): void {
        const posts = localStorage.getItem(this.storageKey) || '[]'
        const newPosts = JSON.parse(posts).map(el =>
            el.id == postData.id
                ? { ...postData, date: new Date().toString() }
                : el
        )
        localStorage.setItem(this.storageKey, JSON.stringify(newPosts))
    }

    create(addPost: AddLocalPostParams): void {
        const post = {
            ...addPost,
            publishedAt: new Date().toString(),
            id: v4(),
        }
        const posts = localStorage.getItem(this.storageKey) || '[]'
        const newPosts = [...JSON.parse(posts), post]
        localStorage.setItem(this.storageKey, JSON.stringify(newPosts))
    }
}

export default new LocalPosts()
