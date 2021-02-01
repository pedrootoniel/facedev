import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../../../hooks/AuthProvider'
import {
  Container,
  Wrapper,
  BoxPost,
  ProfilePost,
  ImgProfilePost,
  InfoProfile,
  StrongPost,
  SpanPost,
  ImgPost,
  TextPost
} from './styles'

function FeedPost({match}) {
  const { authUser } = useAuth()

  const [postShare, setPostShare] = useState([])
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    axios.get(`/profile/${match.params.userId}`,
        { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
          if (resp.data.success) {
            setName(resp.data.user.name)
            setTitle(resp.data.user.title)
            setImage(resp.data.user.image)
            setPostShare(resp.data.feed)
          }
        })
      
  }, [])

  return (
    <Container className='column-post'>
      <Wrapper>
        {
          postShare.map(feed => (
            <BoxPost key={feed.id}>
              <ProfilePost>
                <ImgProfilePost src={image} />
                <InfoProfile>
                  <StrongPost>{name}</StrongPost>
                  <SpanPost>{title}</SpanPost>
                </InfoProfile>
              </ProfilePost>
              <TextPost>
                {feed.description}
                <ImgPost src={feed.image} />
              </TextPost>
            </BoxPost>
          ))
        }
      </Wrapper>
    </Container>
  )
}

export default FeedPost