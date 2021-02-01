import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../services/api'
import { useAuth } from '../../hooks/AuthProvider'

import {
  Container,
  Wrapper,
  Span,
  Content,
  BoxUser,
  BoxImgs,
  ImgBackground,
  ImgProfile,
  BoxTexts,
  Strong,
  BoxRepos,
  ButtonNext,
  NextPage
} from './styles'
import Back from '../../assets/gradient.jpg'
import { Link } from 'react-router-dom'

function List() {
  const { authUser } = useAuth()
  const [listUsers, setListUsers] = useState([])

  useEffect(() => {
    (async () => {
      const resp = await axios.get('/indexUsers', { headers: { Authorization: `Bearer ${authUser.token} ` } })
      if (resp.data.success) {
        const usersGit = resp.data.users

        for (let i = 0; i < resp.data.users.length; i++) {
          const respGit = await api.get('/users/' + resp.data.users[i].github_user)
          usersGit[i].public_repos = respGit.data.public_repos
          usersGit[i].followers = respGit.data.followers
        }
        setListUsers(usersGit)
      }


    })()
  }, [])

  return (
    <Container>
      <Wrapper>
        <Span titleUsers>Usuários da plataforma</Span>
        <Content>
          {
            listUsers.map(user => (
              <Link to={`/profile/${user.id}`} key={user.id}>
                <BoxUser>
                  <BoxImgs>
                    <ImgBackground src={user.background || Back} />
                    <ImgProfile src={user.image} />
                  </BoxImgs>
                  <BoxTexts>
                    <Strong> {user.name} </Strong>
                    <Span subtitle> {user.title} </Span>
                  </BoxTexts>
                  <hr />
                  <BoxRepos>
                    <Span>{user.public_repos} Repositórios</Span>
                    <Span>{user.followers} Seguidores</Span>
                  </BoxRepos>
                </BoxUser>
              </Link>
            ))
          }

          <ButtonNext>
            <NextPage>Carregar mais itens</NextPage>
          </ButtonNext>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default List