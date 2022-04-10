import React, {useState, useEffect} from 'react'
import LoadingTrendingPanel from '../Shimmer/LoadingTrendingPanel'
import TrandingUsers from './TrandingUsers'

import { Container } from './styles'

function RightColumn() {

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  
  return (
    <Container className='right-column'>
      {isLoading ? (
        <LoadingTrendingPanel />
      ) : (
          <TrandingUsers />
      )}
    </Container>
  )
}

export default RightColumn