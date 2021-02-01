import styled, { css } from 'styled-components'

export const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  outline: none;
  ::placeHolder{
    color: #999;
  }
  ${props => props.withError && css`
    border: 1px solid #f00;
    margin-bottom: 2px;
  `};
`

export const Error = styled.p`
  align-self: flex-start;
  padding-left: 10px;
  font-size: 13px;
  color: #F00;
`