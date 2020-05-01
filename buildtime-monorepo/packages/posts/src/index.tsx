import React, { ReactElement, Suspense, useState } from 'react'
import { ApolloProvider } from 'react-apollo-hooks'
import ApolloClient from 'apollo-boost'
import { useCommunication } from '@myapp/communication-sdk'
import Posts from './Posts'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

export default function App(): ReactElement {
  const { subscribe } = useCommunication()
  const [search, setSearch] = useState('')

  subscribe('SEARCH', (_topic, value) => {
    setSearch(value)
  })

  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<div>Loading list...</div>}>
        <Posts
          search={search}
        />
      </Suspense>
    </ApolloProvider>
  )
}
