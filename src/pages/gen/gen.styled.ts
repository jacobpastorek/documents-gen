import styled, { css } from 'styled-components';

export const GenSC = styled.main`
  display: flex;
  min-height: calc(100vh - 110px);
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.xl}px) {
    width: 100%;
    max-height: calc(100vh - 110px);
    padding-top: 50px;
    justify-content: flex-start;
    flex-direction: column;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 100px);
    max-width: 500px;
    height: 100px;
    margin: 50px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      div {
        h2 {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
    div {
      display: flex;
      align-items: center;
      h2 {
        font-size: 24px;
        margin-left: 15px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary};
        span {
          font-weight: 300;
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.xl}px) {
      max-width: 500px;
      height: 60px;
      margin: 10px;
      div {
        h2 {
          font-size: 16px;
          margin-left: 15px;
          font-weight: bold;
          color: ${({ theme }) => theme.colors.primary};
          span {
            font-weight: 300;
          }
        }
      }
    }
  }
`;
