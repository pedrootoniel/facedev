import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../../../hooks/AuthProvider'

import {
  Container,
  Wrapper,
  Span,
  BoxUser,
  ImgProfile,
  User,
  Strong,
  SubTitile
} from './styles'
import UserProfile from '../../../assets/profile-user.png'
import { Link } from 'react-router-dom'

function TrandingUsers() {

  const { authUser } = useAuth()

  const [lastUsers, setLastUsers] = useState([])

  useEffect(() => {
    axios.get('/lastUsers', { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      if (resp.data.success) {
        setLastUsers(resp.data.users)
      }
    })
  }, [])


  return (
    <Container>
      <Wrapper>
        <Span>Últimos Cadastros</Span>
        <hr />
        {
          lastUsers.map(last => (
            <Link to={`/profile/${last.id}`} key={last.id}>
              <BoxUser >
                <ImgProfile src={last.image || UserProfile} />
                <User>
                  <Strong>{last.name}</Strong>
                  <SubTitile>{last.title}</SubTitile>
                </User>
              </BoxUser>
            </Link>
          ))
        }
      </Wrapper>
    </Container>
  )
}

export default TrandingUsers