import styled from 'styled-components';

export const GenLayoutSC = styled.main`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  background: ${({ theme }) => theme.colors.white};

  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    bottom: 0px;
    background: ${({ theme }) => theme.colors.primary};
    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 10px;
    }
  }
  .top {
    padding-left: 20px;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
    p {
      color: ${({ theme }) => theme.colors.white};
      margin-left: 10px;
      font-size: 16px;
      span {
        font-weight: 300;
      }
    }
  }
`;
