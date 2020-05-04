import server from './server'

server.listen(
  4000,
  () => console.log(
    `🚀  Server ready at http://localhost:4000/graphql`
  )
)
