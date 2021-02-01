import styled, {css} from 'styled-components'
import {shade} from 'polished'
import { Form } from '@unform/web'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;

  background: var(--color-ciano);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;

    padding: 0 150px;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;

    padding: 0 150px;
  }
`
export const ImgLogo = styled.img`
  width: 250px;
`

export const ImgBanner = styled.img``

export const FormUnform = styled(Form)`
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  h3 {
    align-self: flex-start;
    color: var(--color-blue-dark);
  }

  span {
    bottom: 20px;
    padding-left: 50px;
    width: 400px;
    font-size: 20px;
    color: var(--color-blue-dark);
    position: absolute;
  }
`

export const Button = styled.button`
  height: 40px;
  padding: 0 30px;
  outline: none;
  cursor: pointer;
  transition: 0.2s;

  border: 0;
  border-radius: 5px;
  font-weight: bold;
  color: #FFF;
  background: var(--color-blue-dark);

  :hover {
    background: ${shade(0.2, '#575A89')};
  }

  ${props => props.login && css`
    align-self: flex-start;
  `}
`