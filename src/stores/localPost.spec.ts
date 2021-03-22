import MockDate from 'mockdate'
import localPostStore from './localPosts'

jest.mock('uuid', () => ({ v4: () => 'generated-id' }))

const mockAddPostParam = () => ({
    author: 'jhondoe',
    content: 'content',
    description: 'description',
    title: 'title',
    url: 'url',
    urlToImage: 'http://url.com',
})

const mockPost = () => ({
    ...mockAddPostParam(),
    publishedAt: new Date().toString(),
    id: 'generated-id',
})

describe('localPost Store', () => {
    beforeEach(() => {
        MockDate.set(new Date())
        localStorage.clear()
    })
    afterEach(() => {
        MockDate.reset()
    })

    describe('create()', () => {
        it('should be able to add a new article when storage is empty', () => {
            const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')

            localPostStore.create(mockAddPostParam())

            const strAnswer = JSON.stringify([mockPost()])

            expect(setItemSpy).toHaveBeenCalledWith(
                '@next-blog/posts',
                strAnswer
            )
        })
        it('should be able to add a new article when storage is not empty', () => {
            jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(
                JSON.stringify([mockPost()])
            )

            const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')

            localPostStore.create(mockAddPostParam())

            const strAnswer = JSON.stringify([mockPost()])

            expect(setItemSpy).toHaveBeenCalledWith(
                '@next-blog/posts',
                strAnswer
            )
        })
    })
    describe('findOne()', () => {
        it('should return the post if it exist', () => {
            const post = mockPost()

            jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(
                JSON.stringify([post])
            )

            const response = localPostStore.findOne(post.id)

            expect(response).toEqual(post)
        })
        it('should return undefined when the post does not exist', () => {
            const post = mockPost()

            jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(
                undefined
            )

            const response = localPostStore.findOne(post.id)

            expect(response).toBeFalsy()
        })
    })
    describe('findAll()', () => {
        it('should all posts', () => {
            jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(
                JSON.stringify([mockPost(), mockPost()])
            )

            const response = localPostStore.findAll()

            expect(response.length).toBe(2)
        })
        it('should return an empty array when there is not a post', () => {
            jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(
                JSON.stringify([])
            )

            const response = localPostStore.findAll()

            expect(response.length).toBe(0)
        })
    })
    describe('save()', () => {
        it('should be possible update a post', () => {
            const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')

            jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(
                JSON.stringify([mockPost()])
            )

            const newPost = {
                ...mockPost(),
                author: 'other-author',
                title: 'other-title',
            }

            localPostStore.save(newPost)

            expect(setItemSpy).toHaveBeenCalledWith(
                '@next-blog/posts',
                JSON.stringify([mockPost()])
            )
        })
    })
})
