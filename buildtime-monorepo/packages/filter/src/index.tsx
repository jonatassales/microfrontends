import React, { ReactElement } from 'react'
import { ApolloProvider } from 'react-apollo-hooks'
import ApolloClient from 'apollo-boost'
import Filters from './Filters'
import { FilterTheme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    filter: FilterTheme;
  }
}

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

export default function App(): ReactElement {
  return (
    <ApolloProvider client={client}>
      <Filters />
    </ApolloProvider>
  )
}

export * from './theme';
