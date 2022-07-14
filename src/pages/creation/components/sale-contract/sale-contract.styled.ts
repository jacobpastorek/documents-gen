import styled from 'styled-components';

export const SaleContractWrapSC = styled.main`
  width: 100%;
  min-height: calc(100vh - 110px);
  height: 100%;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakPoints.xl}px) {
    height: auto;
    flex-direction: column;
  }
`;

export const SaleContractViewSC = styled.section`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakPoints.xl}px) {
    width: 100%;
    height: 300px;
  }
`;

export const SaleContractEditSC = styled.section`
  width: 50%;
  height: 100%;
  padding-bottom: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakPoints.xl}px) {
    flex-direction: column;
  }

  .input-wrap {
    width: 50%;
    padding: 20px;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: space-between;
    margin-top: 20px;
    &.not-active {
      margin-top: 0px;
      height: 0px;
      padding: 0px;
    }
    &.full {
      width: 100%;
      flex-direction: column;
      label {
        margin-top: 5px;
        display: flex;
        align-items: center;
        .checkbox {
          position: relative;
          cursor: pointer;
          width: 20px;
          height: 20px;
          border: 1px solid black;
          margin-right: 10px;
          border-radius: 2px;
          &.active {
            background: black;
            &::after {
              content: '✓';
              transform: translate(-50%, -50%);
              position: absolute;
              left: 50%;
              top: 50%;
              color: white;
            }
          }
        }
      }
    }
    h2 {
      width: 100%;
      font-size: 18px;
      font-weight: bold;
      span {
        font-size: 12px;
        font-weight: 400;
      }
    }
    &__item {
      width: calc(50% - 10px);
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.xl}px) {
      width: 100%;
    }
  }

  .action-wrap {
    width: 100%;
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
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.xl}px) {
    width: 100%;
    border-top: 1px solid #222;
  }
`;
