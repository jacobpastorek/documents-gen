import styled from 'styled-components';

export const InputSC = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-top: 10px;
  input {
    width: 100%;
    padding: 8px 15px;
    border-radius: 2px;
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    &::placeholder {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 300;
    }
  }
`;
