import React, { ReactElement, lazy, Suspense } from 'react'
import styled from 'styled-components'
import { CommunicationProvider } from '@myapp/communication-sdk'
import Posts from '@myapp/posts'
import Filter from '@myapp/filter'
import { DefaultThemeProvider } from './theme'
import {
  Header
} from './components'

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
            <Filter />
            <Posts/>
          </MicrofrontendsContainer>
        </ShellContainer>
      </DefaultThemeProvider>
    </CommunicationProvider>
  )
}
