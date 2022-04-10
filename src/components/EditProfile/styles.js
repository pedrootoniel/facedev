import styled from 'styled-components'
import { Form } from '@unform/web'

export const Container = styled.div`
  width: 350px;
  position: absolute;
  z-index: 5;
  background: #FFF;
  border-radius: 10px;
  padding: 40px 10px 10px;
  box-shadow: 2px 1px 3px 2px rgba(0,0,0, 0.2);

  display: flex;
  flex-direction: column;

  margin-left: 160px;
  margin-top: 190px;
`
export const FormUnform = styled(Form)`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .uninput {
    border: 1px solid #ccc;
    margin: 0;
  }

  label{
    padding-top: 10px;
    align-self: flex-start;
  }
`
export const Strong = styled.span`
  align-self: center;
  padding-bottom: 20px;
  font-size: 20px;
`

export const Button = styled.button`
  padding: 8.5px 30px;
  margin-top: 10px;
  border: 0;
  border-radius: 5px;
  font-weight: bold;

  color: #575A89;
  background: #8DE4FF;

  align-self: flex-end;
`
