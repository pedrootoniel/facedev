import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Container, Input, Searchicon, Texts, Button, CloseIcon, ContainerInput, ContainerListUsers } from './styles'

function InputSearch() {

  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {

    if (!search) {
      return setResults([])
    }

    if (search.length < 2) return;

    axios.get(`/searchUser?search=${search}`).then(resp => {

      if (resp.data.success) {
        return setResults(resp.data.users);
      }

      alert(resp.data.message)

    }).catch((err) => {
      alert('Erro ao buscar usuários')
    })

  }, [search]);

  return (
    <Container>
      <ContainerInput>
        <Input
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder='Pesquisar'
        />
        <Button onClick={() => !!search && setSearch('')}>
          {
            !search &&
            <Searchicon />
          }
          {
            !!search &&
            <CloseIcon />
          }
        </Button>
      </ContainerInput>
      {
        !!results.length &&
        <ContainerListUsers>
          {
            results.map((user, index) => (
              <Link to={`/profile/${user.id}`}>
                <div key={index}>
                  <img src={user.image} />
                  <Texts>
                    <strong>{user.name}</strong>
                    <span>{user.title}</span>
                  </Texts>
                </div>
              </Link>
            ))
          }
        </ContainerListUsers>
      }
    </Container>
  )
}

export default InputSearch