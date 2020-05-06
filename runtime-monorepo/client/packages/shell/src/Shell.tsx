import React, { ReactElement, lazy, Suspense } from 'react'
import styled from 'styled-components'
import { DefaultThemeProvider } from './theme'
import {
  Header
} from './components'

const CommunicationProvider = lazy(() => import(
  /* webpackChunkName: "communication-sdk" */ '@myapp/communication-sdk'
))

const Posts = lazy(() => import(
  /* webpackChunkName: "posts" */ '@myapp/posts'
))

const Filter = lazy(() => import(
  /* webpackChunkName: "filter" */ '@myapp/filter'
))

const ShellContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const MicrofrontendsContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 20px;
  padding: 10px 20px;
`

export default function Shell(): ReactElement {
  return(
    <DefaultThemeProvider>
      <ShellContainer>
        <Header />
        <Suspense fallback={<h1>Loading Communication...</h1>}>
          <CommunicationProvider>
            <MicrofrontendsContainer>
              <Suspense fallback={<h1>Loading Search Microfrontend...</h1>}>
                <Filter />
              </Suspense>
              <Suspense fallback={<h1>Loading Posts Microfrontend...</h1>}>
                <Posts/>
              </Suspense>
            </MicrofrontendsContainer>
          </CommunicationProvider>
        </Suspense>
      </ShellContainer>
    </DefaultThemeProvider>
  )
}
