import styled, { css } from 'styled-components';

export const GenSC = styled.main`
  display: flex;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.xl}px) {
    padding-top: 50px;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 100px);
    max-width: 500px;
    height: 200px;
    margin: 50px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover {
      border: 2px dashed ${({ theme }) => theme.colors.primary};
    }
    div {
      display: flex;
      align-items: center;
      svg {
        width: 60px;
        height: 60px;
        path,
        ellipse {
          stroke: ${({ theme }) => theme.colors.primary};
        }
      }
      h2 {
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
      height: 100px;
      margin: 10px;
      div {
        svg {
          width: 30px;
          height: 30px;
        }
        h2 {
          font-size: 20px;
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
