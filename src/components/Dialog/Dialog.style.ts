import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  z-index: 10;
`;

export const CenterWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 20;
`;

export const WhiteBox = styled.div`
  width: 380px;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0px 1rem 1rem rgba(67, 67, 67, 0.03);

  color: ${({ theme }) => theme.color.fc01};
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    line-height: 1.5;
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;

  button + button {
    margin-left: 0.5rem;
  }
`;
/* ${resetButton} */

export const ButtonStyle = styled.button`
  display: flex;
  border: none;
  outline: none;
  background: none;
  padding: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  height: 2.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
`;

export const CancelButton = styled(ButtonStyle)`
  color: ${({ theme }) => theme.color.fc01};
  &:hover {
    background: ${({ theme }) => theme.color.bg02};
  }
`;

export const ConfirmButton = styled(ButtonStyle)<{ isDestructive: boolean }>`
  background: ${({ theme, isDestructive }) =>
    isDestructive ? "red" : theme.color.bg03};
  &:hover {
    background: ${({ theme, isDestructive }) =>
      isDestructive ? "red" : theme.color.bg04};
  }
  color: white;
`;
