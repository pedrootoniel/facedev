import React, {useRef, useState} from 'react'
import axios from 'axios'
import {useAuth} from '../../../hooks/AuthProvider'
import {
  Container,
  Wrapper,
  TextArea,
  Footer,
  Inputs,
  Input,
  ImageIcon,
  Button
} from './styles'

function FeedShare() {
  const {authUser} = useAuth()

  const inputFile = useRef(null)
  const [description, setDescription] = useState('')
  const [file, setFile] = useState('')

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('description', description)
    if(file) {
      formData.append('file', inputFile.current.files[0])
    }
    axios.post('/feed', formData, { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      if(resp.data.success){
        setDescription('')
        setFile('')
      }
    })
  }

  return (
    <Container>
      <Wrapper>
        <TextArea value={description}
        onChange={e => setDescription(e.target.value)} placeholder='Comece a publicar...' />
        <Footer>
          <Inputs>
            <Input 
            ref={inputFile} 
            images 
            type='file'
            accept='image/png, image.jpg'
            onChange={e => setFile(inputFile.current.files[0].name)}
            />
            <ImageIcon onClick={() => inputFile.current.click()} /></Inputs>
            <Input readOnly={true} value={file} />
          <Button onClick={handleSubmit}>Publicar</Button>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default FeedShare