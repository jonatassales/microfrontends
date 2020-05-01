import React, { ReactElement, ReactNode } from 'react'
import { publish, subscribe } from 'pubsub-js'
import Context from './context'

interface CommunicationProviderProps {
  children: ReactNode;
}

export default function CommunicationProvider(props: CommunicationProviderProps): ReactElement {
  const { children } = props
  return (
    <Context.Provider value={{ publish, subscribe }}>
      {children}
    </Context.Provider>
  )
}