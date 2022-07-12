import styled from 'styled-components';

export const AttorneyWrapSC = styled.main`
  width: 100%;
  height: calc(100vh - 70px);
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
  height: calc(100vh - 70px);
  .input-wrap {
    padding: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  a {
    background: black;
    color: white;
    display: block;
    width: 200px;
    padding: 15px;
    text-align: center;
    margin: 20px auto 0 auto;
  }
  input {
    margin-top: 10px;
    padding: 5px 15px;
    width: calc(50% - 5px);
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.xl}px) {
    width: 100%;
  }
`;
