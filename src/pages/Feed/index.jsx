import React from 'react'
import LeftColumn from '../../components/LeftColumn'
import MiddleColumn from '../../components/MiddleColumn'
import RightColumn from '../../components/RightColumn'
import Header from '../../components/Header'

import { Container } from './styles'

function Feed() {

  return (
    <Container>
      <Header />

        <main>
          <LeftColumn />
          <MiddleColumn />
          <RightColumn />
        </main>
    </Container>
  )
}

export default Feed