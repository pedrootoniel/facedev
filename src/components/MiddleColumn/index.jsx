import React, {useState, useEffect} from 'react'
import LoadingFeedShare from '../Shimmer/LoadingFeedShare'
import LoadingFeedPost from '../Shimmer/LoadingFeedPost'
import FeedShare from './FeedShare'
import FeedPost from './FeedPost'

import { Container } from './styles'

function MiddleColumn() {

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])
  
  return (
    <Container className='middle-column'>
      {isLoading ? (
        <>
          <LoadingFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          <FeedShare />
          <FeedPost />
        </>
      )}
    </Container>
  )
}

export default MiddleColumn