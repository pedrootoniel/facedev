import styled from 'styled-components'

export const Container = styled.div`
  > div {
    margin-top: 60px;

    .bg-skeleton {
      width: 100%;
      height: 100px;
      border-radius: 10px 10px 0 0;
      filter: brightness(96%);
    }
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 175px;
      .avatar-skeleton {
        z-index: 1;
        width: 72px;
        height: 72px;
        border-radius: 50%;
        margin: -86px 0 10px;
      }
      .row-skeleton {
        height: 12px;
        &:nth-child(2) {
          width: 60%;
        }
        &:nth-child(3) {
          width: 50%;
          margin-top: 10px;
        }
      }
    }
  }
`