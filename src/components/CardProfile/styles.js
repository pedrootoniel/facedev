import styled, { css } from 'styled-components'
import {BiImageAdd} from 'react-icons/bi'
import {BsPencilSquare} from 'react-icons/bs'
import { GoTriangleUp } from 'react-icons/go'


export const Container = styled.div`
  border-radius: 10px;
  padding-right: 40px;
  padding-left: 155px;
  padding-bottom: 20px;
`
export const Wrapper = styled.div`
  margin-top: 60px;
  border-radius: 10px;
  background: #FFF;

  display: flex;
  flex-direction: column;

  hr {
    width: 95%;
    align-self: center;
  }
`

export const BoxImgs = styled.div`
  height: 136px;
  border-radius: 10px 10px 0 0;

  display: flex;
  justify-content: flex-end;
  position: relative;
`

export const ImgBackground = styled.img`
  width: 550px;
  flex: 1;
  border-radius: 10px 10px 0 0;

  object-fit: cover;
`

export const ImgIcon = styled(BiImageAdd)`
  color: #fff;
  background: #575A89;
  width: 24px;
  height: 24px;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;

  z-index: 2;
  position: absolute;

  ${props => props.bannerstyle && css`
    align-self: flex-end;
    margin-right: 10px;
    margin-bottom: -10px;
  `}

  ${props => props.profile && css`
    margin-left: 70px;
    margin-top: 75px;
  `}

`

export const ContentImg = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;

  left: 20px;
  top: 60px;
`

export const ImgProfile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #ccc;
`

export const BoxRepos = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`

export const Span = styled.span`
  font-size: 16px;

  ${props => props.titleProfile && css`
  padding-left: 30px;
  `}
  ${props => props.email && css`
    padding-left: 30px;
    font-size: 12px;
  `}
`

export const Strong = styled.strong`
  font-size: 20px;
  padding: 30px 0 0 30px;

  ${props => props.bio && css`
    text-decoration: underline;
    color: #575A89;
  `}
`

export const Bio = styled.span`
  font-size: 16px;
  padding: 10px 30px 20px;
  text-align: justify;
`  

export const SpanRepo = styled.span`
  padding-right: 10px;
`

export const PencilIcon = styled(BsPencilSquare)`
  color: #575A89;
  width: 18px;
  height: 18px;
  cursor: pointer;
`

export const DropRemoveImg = styled.div`
  background: #fff;
  z-index: 10;
  position: absolute;
  margin-top: 110px;
  padding: 10px;
  border-radius: 5px;
  margin-right: -20px;
  box-shadow: 1px 2px 3px 2px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${props => props.bannerDrop && css`
    margin-top: 150px;
    margin-right: -5px;
  `}
`


export const TriangleDrop = styled(GoTriangleUp)`
  position: absolute;
  z-index: 20;
  color: #fff;
  right: 20px;
  background: transparent;
  margin-top: -75px;

`
export const ButtonDrop = styled.button`
  border: 0;
  background: transparent;
  outline: none;
  color: #575A89;
  padding: 5px;
  text-decoration: underline;
  cursor: pointer;
`

export const Repositories = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 50px;

  ul {
    flex: 1;
    flex-wrap: nowrap;
  }
 li{
    padding-right: 30px;
  }
`