import React from 'react'
import Logo from '../../../assets/logo.png'
import Loading from '../../../assets/loading.svg'
import { Container, ImgLogo, ImgLoading } from './styles'

function LoadingLandingPage() {
  return(
    <Container>
      <ImgLogo src={Logo} />
      <ImgLoading src={Loading} />
    </Container>
  )
}

export default LoadingLandingPage