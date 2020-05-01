import React, { ReactElement, Suspense, useState, useEffect } from 'react'
import { ApolloProvider } from 'react-apollo-hooks'
import ApolloClient from 'apollo-boost'
import { useCommunication } from '@myapp/communication-sdk'
import Posts from './Posts'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

export default function App(): ReactElement {
  const { subscribe, unsubscribe } = useCommunication()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const topic = subscribe('SEARCH', (_topic, value) => {
      setSearch(value)
    });

    return () => {
      unsubscribe(topic);
    }
  }, [subscribe, unsubscribe])

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
