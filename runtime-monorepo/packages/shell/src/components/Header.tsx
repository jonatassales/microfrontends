import React, { ReactElement, memo } from 'react'
import styled from 'styled-components'
interface HeaderProps {
  className?: string;
}

function Header(props: HeaderProps): ReactElement {
  const {
    className
  } = props;
  return (
    <div className={className}>
      Daitan University
    </div>
  )
}

const StyledHeader = styled(Header)`
  width: 100%;
  padding: 20px;
  font-size: 30px;
  color: ${({ theme }) => theme.shell.color.primary};
  background-color: ${({ theme }) => theme.shell.color.secondary};
  box-shadow: 0 4px 2px -2px lightgray;
  box-sizing: border-box;
`

export default memo(StyledHeader);
