import React, { ReactElement, memo, MouseEvent } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  className?: string;
  children: string;
  primaryColor: string;
  secondaryColor: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button(props: ButtonProps): ReactElement {
  const {
    className,
    children,
    onClick,
    ...rest
  } = props

  return(
    <button
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

const StyledButton = styled(Button)`
    background-color: ${({ primaryColor }) => primaryColor};
    color: ${({ secondaryColor }) => secondaryColor};
    text-decoration: none;
    border: none;
    padding: 0 20px;
    border-radius: 4px;
    margin: 3px 0;
    height: 50px;
    font-weight: 500;
    font-size: 15px;
    transition: 100ms;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
`

export default memo(StyledButton)
