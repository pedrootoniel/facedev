import styled from 'styled-components';

export const Container = styled.div`
  width: 550px;
  
  @media (min-width: 1180px) {
    margin-top: 16px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const BoxPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #FFF;
  border-radius: 10px;
  border: 1px solid #e9e5df;
  padding: 10px;

  & + div {
    margin-top: 10px;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`

export const ImgProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ccc;
`

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

export const Strong = styled.strong``

export const Span = styled.span`
  font-size: 12px;
`

export const TextPost = styled.span`
  padding: 10px;
  font-size: 14px;
`
export const ImgPost = styled.img`
  flex:1;
  width: 510px;
  margin: 5px 0 0 0;
`