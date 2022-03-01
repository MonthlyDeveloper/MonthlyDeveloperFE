import styled from "styled-components";

interface ContainerProps {
  bgColor?: string;
  txtColor?: string;
  addStyle?: any;
}

export const Container = styled.div<ContainerProps>`
  display: inline-block;
  background: ${({ theme, bgColor }) => bgColor ?? theme.color.bg05};
  cursor: pointer;
  margin: 2px 4px 2px 0;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: ${({ theme }) => theme.fs12};
  color: ${({ theme, txtColor }) => txtColor ?? theme.color.fc01};
  ${({ addStyle }) => addStyle}
`;

export const DeleteButton = styled.div`
  display: inline-block;
  user-select: none;
  padding-left: 5px;
`;
