import React from 'react'
import Header from '../../components/Header'
import List from '../../components/List'
import RightColumn from '../../components/RightColumn'

import { Container, Wrapper, FeedList } from './styles'

function ListUsers() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <FeedList>
          <List />
        </FeedList>
        <RightColumn />
      </Wrapper>
    </Container>
  )
}

export default ListUsers