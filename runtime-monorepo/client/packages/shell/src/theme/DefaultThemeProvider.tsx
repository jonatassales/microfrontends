import React, { memo, ReactElement, ReactNode, useMemo } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import Colors from './Colors';

export interface DefaultThemeProviderProps {
  children: ReactNode;
}

function DefaultThemeProvider(props: DefaultThemeProviderProps): ReactElement {
  const {
    children
  } = props


  const theme = useMemo((): DefaultTheme => ({
    shell: {
      color: Colors
    },
    filter: {
      color: Colors
    }
  }), []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default memo(DefaultThemeProvider)
