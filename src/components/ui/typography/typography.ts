import styled from 'styled-components';

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 70px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BodyText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.primary};

  &.bold {
    font-weight: 600;
  }
  &.uppercase {
    text-transform: uppercase;
  }
`;
export const SmallText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.primary};
  &.smaller {
    font-size: 14px;
    line-height: 16px;
  }
  &.small {
    font-size: 12px;
    line-height: 14px;
  }
  &.thinner {
    font-weight: 400;
  }

  &.bold {
    font-weight: 600;
  }
`;
