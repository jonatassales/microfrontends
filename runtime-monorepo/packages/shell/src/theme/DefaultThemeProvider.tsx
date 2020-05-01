import React, { memo, ReactElement, ReactNode, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import { WithFilterTheme } from '@myapp/filter'
import GlobalStyle from './GlobalStyle'
import WithShellTheme from './WithShellTheme';
import Colors from './Colors';

export interface DefaultThemeProviderProps {
  children: ReactNode;
}

type WithThemes = 
  WithShellTheme
  & WithFilterTheme;

function DefaultThemeProvider(props: DefaultThemeProviderProps): ReactElement {
  const {
    children
  } = props


  const theme = useMemo((): WithThemes => ({
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
