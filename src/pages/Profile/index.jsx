import React from 'react'
import CardProfile from '../../components/CardProfile'
import Header from '../../components/Header'
import RightColumn from '../../components/RightColumn'
import FeedPost from '../../components/CardProfile/FeedPost'

import { Container, Wrapper, ContentProfile } from './styles'

function Profile({match}) {

  return(
    <Container>
      <Header />
      <Wrapper>
        <ContentProfile>
          <CardProfile match={match} />
          <FeedPost match={match} />
        </ContentProfile>
        <RightColumn />
      </Wrapper>
    </Container>
  )
}

export default Profile