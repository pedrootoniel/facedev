import styled, { css } from 'styled-components'
import Gradient from '../../../assets/gradient.jpg'

export const Container = styled.div`
  position: sticky;
  top: 60px;
  margin-top: 60px;
  width: 164px;
`
export const Wrapper = styled.div`
  border-radius: 10px;
  background: #FFF;
  border: 1px solid #e9e5df;

  display: flex;
  flex-direction: column;

  hr {
    width: 90%;
    align-self: center;
  }
`

export const BoxImgs = styled.div`
  height: 110px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImgBackgorund = styled.img`
  flex: 1;
  width: 164px;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  position: relative;

`

export const ImgProfile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #ccc;
  position: absolute;
`

export const BoxRepos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const Span = styled.span`
  font-size: 12px;

  & + span {
    padding-top: 10px;
  }

  ${props => props.titleProfile && css`
    align-self: center;
    text-align: center;
    padding: 5px 0 10px 0;
  `}
`

export const Strong = styled.strong`
  font-size: 16px;
  align-self: center;
  padding-top: 10px;
`

export const Bio = styled.span`
  font-size: 12px;
  padding: 10px;
  text-align: justify;
`  