import React, { useState, useEffect, useRef, useCallback } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { useAuth } from '../../hooks/AuthProvider'
import Input from '../Input'
import { Container, Strong, FormUnform, Button } from './styles'

function EditProfile() {

  const { authUser, updateUser } = useAuth()
  const [user, setUser] = useState({})

  const formRef = useRef(null)

  useEffect(() => {
    axios.get('/users', { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      if (resp.data.success) {
        const userData = {
          name: resp.data.user.name,
          title: resp.data.user.title,
          email: resp.data.user.email,
          github_user: resp.data.user.github_user
        }
        setUser(userData)
      }
    })
  }, [])

  const handleSubmit = useCallback(async (data) => {
    try {
      const schema = yup.object().shape({
        name: yup.string().required('O campo de nome não pode ficar em branco.'),
        title: yup.string()
      })

      await schema.validate(data, {
        abortEarly: false
      })

      formRef.current.setErrors({})

      const userData = {}
      userData.name = data.name
      userData.title = data.title

      const resp = await axios.put('/users', userData, { headers: { Authorization: `Bearer ${authUser.token} ` } })
      console.log(resp.data)
      if (resp.data.success) {
        return updateUser(resp.data.user)
      }
      
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
      <Strong>Editar Dados</Strong>
      <FormUnform initialData={user} ref={formRef} onSubmit={handleSubmit}>
        <label>Nome</label>
        <Input type='text' name='name' />
        <label>Título</label>
        <Input type='text' name='title' />
        <label>Email</label>
        <Input disabled type='text' name='email' />
        <label>Usuário do GitHub</label>
        <Input disabled type='text' name='github_user' />
        <Button type='submit'>Salvar</Button>
      </FormUnform>
    </Container>
  )
}

export default EditProfile