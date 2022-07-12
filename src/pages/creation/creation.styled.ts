import styled, { css } from 'styled-components';

export const CreationSC = styled.main`
  display: flex;
  min-height: calc(100vh - 110px);
  padding-top: 50px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  h2 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
    span {
      font-weight: 300;
    }
  }
  .doc-link {
    cursor: pointer;
    border: 1px solid black;
    width: calc(100% - 100px);
    max-width: 500px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    p {
      font-weight: bold;
      font-size: 16px;
    }
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      p {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
