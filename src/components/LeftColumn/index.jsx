import React, {useState, useEffect} from 'react'
import LoadingProfilePanel from '../Shimmer/LoadingProfilePanel'
import ProfilePanel from './ProfilePanel'
import { Container } from './styles'

function LeftColumn() {

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])
  
  return (
    <Container className='left-column'>
      {isLoading ? (
        <LoadingProfilePanel />
      ) : (
          <ProfilePanel />
      )}
    </Container>
  )
}

export default LeftColumn