import { ApolloServer } from 'apollo-server'
import { postsData, commentsData, schema } from './data'
import { compare } from './utils'

export default new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Post: {
      comments(source) {
        return commentsData.items.filter((item: any) => item.id === source.postId)
      }
    },
    Query: {
      posts: (_source, { search }) => {
        if (!search) {
          return postsData
        }

        const searchedPosts = postsData.items.filter((item: any) => compare(item.title, search))
        return {
          total: searchedPosts.length,
          items: searchedPosts
        }
      },
      post: (_source, { id }) => postsData.items.find(item => item.id === id),
      comments: () => commentsData,
      comment: (_source, { id }) => commentsData.items.find((item: any) => item.id === id)
    }
  }
})