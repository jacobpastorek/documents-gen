import styled from 'styled-components';

export const AttorneyWrapSC = styled.main`
  width: 100%;
  min-height: calc(100vh - 110px);
  height: 100%;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakPoints.xl}px) {
    height: auto;
    flex-direction: column;
  }
`;

export const AttorneyViewSC = styled.section`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakPoints.xl}px) {
    width: 100%;
    height: 300px;
  }
`;

export const AttorneyEditSC = styled.section`
  width: 50%;
  min-height: calc(100vh - 70px);
  padding-bottom: 40px;
  .input-wrap {
    padding: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 20px;
    h2 {
      width: 100%;
      font-size: 18px;
      font-weight: bold;
    }
    &__item {
      width: calc(50% - 10px);
    }
  }

  .doc-link {
    margin: 30px auto 30px auto;
    cursor: pointer;
    border: 1px solid black;
    padding: 10px 20px;
    display: block;
    max-width: 200px;
    text-align: center;
    background: ${({ theme }) => theme.colors.primary};
    p {
      font-weight: bold;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.white};
    }
    &:hover {
      background: ${({ theme }) => theme.colors.white};
      p {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.xl}px) {
    width: 100%;
    border-top: 1px solid #222;
  }
`;
