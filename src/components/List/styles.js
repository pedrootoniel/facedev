import styled, {css} from 'styled-components'
import Gradient from '../../assets/gradient.jpg'

export const Container = styled.div`
  border-radius: 10px;
  padding-right: 40px;
  padding-left: 155px;
  padding-bottom: 20px;
  
`
export const Wrapper = styled.div`
  margin-top: 60px;
  background: #FFF;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  hr {
    width: 90%;
    align-self: center;
  }
`

export const Span = styled.span`
  font-size: 12px;
  padding-bottom: 10px;

  ${props => props.titleUsers && css`
    font-size: 22px;
    font-weight: bold;
    padding: 50px 40px 20px;
  `}

  ${props => props.subtitle && css`
    align-self: center;
    text-align: center;
    padding: 0 0 10px;
  `}
`

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: #000;

    hr {
      border: 1px solid #ccc;
    }
  }
`

export const BoxUser = styled.div`
  width: 164px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin: 10px 20px;

  display: flex;
  flex-direction: column;
`

export const BoxImgs = styled.div`
  height: 110px;
  border-radius: 10px 10px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImgBackground = styled.img`
  width: 164px;
  height: 110px;
  position: relative;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`

export const ImgProfile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #ccc;
  position: absolute;
`
export const BoxTexts = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
`

export const Strong = styled.strong`
  font-size: 16px;
  align-self: center;
  padding-top: 10px;
`

export const BoxRepos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const ButtonNext = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const NextPage = styled.button`
  background: transparent;
  border: 0;
  text-decoration: underline;
  padding: 20px;
  cursor: pointer;
  color: #575A89;
`