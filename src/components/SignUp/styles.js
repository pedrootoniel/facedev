import styled from 'styled-components'
import {shade} from 'polished'
import { Form } from '@unform/web'
import { GoTriangleUp } from 'react-icons/go'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  width: 270px;

  top: 120px;
  right: 150px;

  background: var(--color-blue-dark);
  color: #fff;
  border-radius: 5px;

  span {
    align-self: center;
    padding-top: 10px;
  }

  button {
    height: 40px;
    padding: 0 30px;
    outline: none;
    cursor: pointer;
    transition: 0.2s;

    border: 0;
    border-radius: 5px;
    font-weight: bold;
    background: #FFF;
    color: var(--color-blue-dark);

    :hover {
      background: ${shade(0.2, '#fff')};
    }
  }
`

export const FormUnform = styled(Form)`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Chevron = styled(GoTriangleUp)`
  position: absolute;
  z-index: 3;
  right: 20px;
  top: -10px;
  color: var(--color-blue-dark);
`