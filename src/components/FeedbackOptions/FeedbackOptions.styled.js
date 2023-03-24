import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  min-width: 60px;
  font-size: 24px;
  border-color: black;
  border-radius: 6px;
  cursor: pointer;
  transition: box-shadow 100ms linear;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  :active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
