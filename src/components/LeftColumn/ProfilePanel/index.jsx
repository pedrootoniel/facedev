import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../../services/api'
import { useAuth } from '../../../hooks/AuthProvider'
import Gradiente from '../../../assets/gradient.jpg'
import {
  Container,
  Wrapper,
  BoxImgs,
  ImgBackgorund,
  ImgProfile,
  BoxRepos,
  Span,
  Strong,
  Bio
} from './styles'
import UserProfile from '../../../assets/profile-user.png'

function ProfilePanel() {

  const { authUser } = useAuth()

  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [imageBack, setImageBack] = useState('')
  const [repository, setRepository] = useState('')
  const [followers, setFollowers] = useState('')
  const [bio, setBio] = useState('')

  useEffect(() => {
    (async () => {
      const resp = await axios.get('/users', { headers: { Authorization: `Bearer ${authUser.token} ` } })
      if (resp.data.success) {
        setName(resp.data.user.name)
        setTitle(resp.data.user.title)
        setImage(resp.data.user.image)
        setImageBack(resp.data.user.background)
      }

      api.get('/users/' + resp.data.user.github_user).then(resp => {
        setRepository(resp.data.public_repos)
        setFollowers(resp.data.followers)
        setBio(resp.data.bio)
      })
    })()
  }, [])
  return (
    <Container>
      <Wrapper>
        <BoxImgs>
          <ImgBackgorund src={imageBack || Gradiente} />
          <ImgProfile src={image || UserProfile} />
        </BoxImgs>
        <Strong>{name}</Strong>
        <Span titleProfile>{title}</Span>
        <hr />
        <BoxRepos>
          <Span>{repository} Repositórios</Span>
          <Span>{followers} Seguidores</Span>
        </BoxRepos>
        <hr />
        <Bio>{bio}</Bio>
      </Wrapper>
    </Container>
  )
}

export default ProfilePanel