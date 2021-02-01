import React, { useCallback, useRef } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { useAuth } from '../../hooks/AuthProvider'
import Input from '../Input'
import { Container, FormUnform, Chevron } from './styles'

function SignUp() {
  const { signIn } = useAuth()
  const formRef = useRef(null)

  const handleSubmit = useCallback(async (data) => {
    try {
      const schema = yup.object().shape({
        name: yup.string()
          .required('O nome é obrigatório!'),
        email: yup.string()
          .email('O email informado é inválido!')
          .required('O email é obrigatório!'),
        github_user: yup.string()
          .required('O usuáio do GitHub é obrigatório!'),
        password: yup.string()
          .min(6, 'A senha deve possuir no mínimo 6 caracteres')
          .required('A senha é obrigatório!')
      })

      await schema.validate(data, {
        ebortEarly: false
      })

      formRef.current.setErrors({})

      const signUp = {}
      signUp.name = data.name
      signUp.email = data.email
      signUp.github_user = data.github_user
      signUp.password = data.password

      const resp = await axios.post('users', signUp)
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
      <Chevron />
      <span>Faça cadastro e aproveite!</span>
      <FormUnform onSubmit={handleSubmit} ref={formRef}>
        <Input type='text' name='name' placeholder='Nome completo' />
        <Input type='email' name='email' placeholder='Email' />
        <Input type='text' name='github_user' placeholder='Usuário do GitHub' />
        <Input type='password' name='password' placeholder='Senha' />
        <button type='submit'>Salvar</button>
      </FormUnform>
    </Container>
  )
}

export default SignUp