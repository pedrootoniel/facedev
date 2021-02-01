import styled, {css} from 'styled-components'
import {RiImageAddFill} from 'react-icons/ri'
import {shade} from 'polished'

export const Container = styled.div`
  padding: 60px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 100%;
  background: #FFF;
  border-radius: 10px;
  border: 1px solid #e9e5df;
  padding: 10px;
  
  display: flex;
  flex-direction: column;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 105px;
  background: #fff;
  color: #000;
  font-size: 14px;
  padding: 7.5px 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  resize: none;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`

export const Inputs = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  border: 0;
  flex: 1;
  padding-left: 5px;
  ${props => props.images && css`
    display: none;
  `}
`

export const ImageIcon = styled(RiImageAddFill)`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  color: #575A89;
  cursor: pointer;
`

export const Button = styled.button`
  height: 40px;
  padding: 0 30px;
  border-radius: 5px;
  border: 0;
  background: #8DE4FF;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background: ${shade(0.2, '#8DE4FF')};
  }
`
