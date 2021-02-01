import React, { useState, useRef, useCallback } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { useAuth } from '../../hooks/AuthProvider'
import Input from '../../components/Input'
import Logo from '../../assets/logo.png'
import Banner from '../../assets/banner.svg'
import { Container, ImgLogo, ImgBanner, FormUnform, Button } from './styles'
import SignUp from '../../components/SignUp'

function LandingPage() {

  const { signIn } = useAuth()

  const [showSignUp, setShowSignUp] = useState(false)
  const formRef = useRef(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitLogin = useCallback(async (data) => {
    try {
      const schema = yup.object().shape({
        email: yup.string()
          .email('O email não é válido!')
          .required('O email é obrigatório!'),
        password: yup.string()
          .min(6, 'Senha válida!')
          .required('Senha válida!')
      })

      await schema.validate(data, {
        ebortEarly: false
      })

      formRef.current.setErrors({})

      const signInData = {}
      signInData.email = data.email
      signInData.password = data.password

      const resp = await axios.post('/sessions', signInData)
      if (resp.data.success) {
        signIn(resp.data.auth, resp.data.user)
        return
      }

      alert(resp.data.message)

    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationErrors = {}
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message
        })
        formRef.current.setErrors(validationErrors)
        return
      }
      alert(err.toString())
    }
  })

  return (
    <Container>
      <header>
        <ImgLogo src={Logo} />
        <Button onClick={() => setShowSignUp(!showSignUp)}>Criar conta</Button>
        {
          showSignUp &&
          <SignUp setShowSignUp={setShowSignUp} />
        }
      </header>

      <main>
        <FormUnform onSubmit={submitLogin} ref={formRef}>
          <h3>Faça login para continuar</h3>
          <Input type='text' name='email' placeholder='Email' />
          <Input type='password' name='password' placeholder='Senha' />
          <Button login type='submit'>Entrar</Button>

          <span>Descobrir e conectar desenvolvedores é o nosso lema.</span>
        </FormUnform>
        <ImgBanner src={Banner} />
      </main>
    </Container>
  )
}

export default LandingPage