import server from './server'

server.listen(
  5000,
  () => console.log(
    `🚀  Server ready at http://localhost:5000/graphql`
  )
)
