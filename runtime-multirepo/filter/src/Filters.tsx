import React, { ReactElement, useState, useCallback } from 'react'
import { useCommunication } from '@jonatassales/communication-sdk'
import styled from 'styled-components'
import { Input, Button } from './components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 600px 150px;
  grid-column-gap: 18px;
  align-items: center;
`

const SearchButton = styled(Button)`
  color: ${({ theme }) => theme.filter.color.secondary};
  background-color: ${({ theme }) => theme.filter.color.primary};
`

export default function Filters(): ReactElement {
  const [search, setSearch] = useState('')
  const { publish } = useCommunication()

  const onSearchChange = useCallback(
    (event) => setSearch(event.target.value),
    []
  )

  const onSearch = useCallback(
    () => publish('SEARCH', search),
    [search, publish]
  )

  return (
    <Container>
      <SearchContainer>
        <Input
          value={search}
          onChange={onSearchChange}
          placeholder="Search for posts"
        />
        <SearchButton onClick={onSearch}>Search</SearchButton>
      </SearchContainer>
    </Container>
  )
}
