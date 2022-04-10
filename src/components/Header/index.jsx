import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InputSearch from '../InputSearch'
import axios from 'axios'
import {
  Container,
  Wrapper,
  Left,
  LogoImg,
  Right,
  Button,
  HomeIcon,
  UsersIcon,
  CaretDownIcon,
  ProfileCircle,
  DropProfile,
  TriangleDrop,
  UserProfileIcon,
  LogOutIcon,
  ContainerInput
} from './styles'
import Profile from '../../assets/profile-user.png'
import Logo from '../../assets/logo.png'
import { useAuth } from '../../hooks/AuthProvider'

function Header() {

  const { setAuthUser, authUser } = useAuth()

  const [userSearch, setUserSearch] = useState([])
  const [image, setImage] = useState('')
  const [userId, setUserId] = useState('')
  const [showProfile, setShowProfile] = useState(false)

  useEffect(() => {
    usersList()
  }, [])

  const usersList = () => {
    axios.get(`/searchUser?search=${userSearch}`).then(resp => {
      return setUserSearch(resp.data)
    }).catch((err) => {
      alert('Usuário não cadastrado!')
    })
  }

  useEffect(() => {
    axios.get('/users', { headers: { Authorization: `Bearer ${authUser.token} ` } })
      .then(resp => {
        if (resp.data.success) {
          setImage(resp.data.user.image)
          setUserId(resp.data.user.id)
        }
      })
  }, [])

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to='/'><LogoImg src={Logo} /></Link>
          <InputSearch />
        </Left>
        <Right>
          <Button className='active'>
            <HomeIcon />
          </Button>
          <Button>
            <Link to='/users'><UsersIcon /></Link>
          </Button>
          <Button onClick={() => setShowProfile(!showProfile)}>
            <ProfileCircle src={image || Profile} />
            <CaretDownIcon />
            {
              showProfile &&
              <DropProfile>
                <TriangleDrop />
                <Link to={`/profile/${userId}`}> <UserProfileIcon />Meu Perfil</Link>
                <button exit onClick={() => {
                  localStorage.removeItem('@facedev_token')
                  setAuthUser({ Authenticated: false })
                }}> <LogOutIcon /> Sair</button>
              </DropProfile>
            }
          </Button>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Header