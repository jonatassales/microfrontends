import React, { ReactElement } from 'react'
import Filters from './Filters'
import { FilterTheme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    filter: FilterTheme;
  }
}

export default function App(): ReactElement {
  return <Filters />;
}

export * from './theme';
