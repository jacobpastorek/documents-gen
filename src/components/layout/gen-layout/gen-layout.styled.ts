import styled from 'styled-components';

export const GenLayoutSC = styled.main`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  .top {
    padding-left: 30px;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
    p {
      color: ${({ theme }) => theme.colors.white};
      margin-left: 20px;
      span {
        font-weight: 300;
      }
    }
  }
`;
