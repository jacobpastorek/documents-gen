import styled, { css } from 'styled-components';

export const CreationSC = styled.main`
  display: flex;
  height: calc(100vh - 70px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .doc-link {
    margin-top: 10px;
    cursor: pointer;
    border: 1px solid black;
    padding: 10px 20px;
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
