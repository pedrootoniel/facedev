import styled from 'styled-components'
import { FiSearch, FiX } from 'react-icons/fi'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  margin-left: 16px;
  width: 350px;

  background: #fff;
  color: #000;
  font-size: 14px;
  padding: 7.5px 8px;
  border: none;
  outline: none;
  border-radius: 2px 0 0 2px;
  z-index: 3;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #eee;

  &:focus{
    background: #fff;
  }
`

export const Button = styled.button`
  background: #fff;
  color: #000;
  font-size: 14px;
  padding: 7px 8px;
  border: none;
  outline: none;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
  z-index: 3;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #eee;
`

export const Searchicon = styled(FiSearch)``

export const CloseIcon = styled(FiX)``

export const ContainerListUsers = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  align-self: stretch;
  background: white;
  padding: 30px 20px;
  width: 100%;
  margin-left: 16px;
  box-shadow: 2px 2px 5px #000;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  div {
    display: flex;
    margin-bottom: 5px;
  }
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
`
