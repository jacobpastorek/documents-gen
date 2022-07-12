import styled from 'styled-components';

export const AttorneyWrapSC = styled.main`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
`;

export const AttorneyViewSC = styled.section`
  width: 50%;
`;

export const AttorneyEditSC = styled.section`
  width: 50%;
  height: calc(100vh - 70px);
  a {
    background: black;
    color: white;
    display: block;
    width: 200px;
    padding: 15px;
    text-align: center;
    margin: 20px auto 0 auto;
  }
`;
