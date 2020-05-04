import React, { ReactElement, lazy, Suspense } from 'react'
import styled from 'styled-components'
import { CommunicationProvider } from '@myapp/communication-sdk'
import { DefaultThemeProvider } from './theme'
import {
  Header,
  Loader
} from './components'

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
    <CommunicationProvider>
      <DefaultThemeProvider>
        <ShellContainer>
          <Header />
          <MicrofrontendsContainer>
            <Suspense fallback={<Loader />}>
              <Filter />
            </Suspense>
            <Suspense fallback={<Loader />}>
              <Posts/>
            </Suspense>
          </MicrofrontendsContainer>
        </ShellContainer>
      </DefaultThemeProvider>
    </CommunicationProvider>
  )
}
