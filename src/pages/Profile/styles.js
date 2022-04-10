import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;

  .column-post {
    width: 100%;
    align-self: center;
    padding: 0 40px 0 155px;

    @media (min-width: 1180px) {
    margin-top: 16px;
  }
  }

  @media (min-width: 1180px) {
    > span {
      margin-top: 52px;
      padding: 8px 0;
    }
    > main {
      margin: 0 30px;
      display: flex;
      justify-content: center;
    }
  }
  .right-column{
    display: none;
  }
  @media (min-width: 1180px) {
    .right-column{
      display: unset;
    }
    .middle-column {
      margin: 0 25px 16px;
    }
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 1128px;
  justify-content: space-between;

  
  margin: 0 30px;
`

export const ContentProfile = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`