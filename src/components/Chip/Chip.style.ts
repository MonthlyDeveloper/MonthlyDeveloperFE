import styled from "styled-components";

interface ContainerProps {
  bgColor?: string;
  txtColor?: string;
  addStyle?: any;
}

export const Container = styled.div<ContainerProps>`
  display: inline-block;
  background: ${({ bgColor }) => bgColor};
  cursor: pointer;
  margin: 2px 4px 2px 0;
  padding: 2px 8px;
  border-radius: 3px;
  border: 1px solid black;
  font-size: ${({ theme }) => theme.fs12};
  color: ${({ txtColor }) => txtColor};
  ${({ addStyle }) => addStyle}
`;

export const DeleteButton = styled.div`
  display: inline-block;
  user-select: none;
  padding-left: 5px;
`;
