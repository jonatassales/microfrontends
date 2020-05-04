import React, { ReactElement, memo, ChangeEvent } from 'react'
import styled from 'styled-components'

interface InputProps {
  className?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps): ReactElement {
  const {
    className,
    value,
    onChange,
    ...rest
  } = props

  return(
    <input
      className={className}
      value={value}
      onChange={onChange}
      {...rest}
    />
  )
}

const StyledInput = styled(Input)`
    display: flex;
    height: 50px;
    width: 100%;
    padding: 5px 35px 5px 50px;
    border: 1px solid #f2f2f2;
    font-size: 1rem;
    line-height: 1.25em;
    font-weight: 300;
    background: #f7f7f7;
    border-radius: 4px;
    box-sizing: border-box;
`

export default memo(StyledInput)
