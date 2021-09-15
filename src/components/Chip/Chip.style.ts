import styled from "styled-components";

interface ContainerProps {
  bgColor?: string;
  txtColor?: string;
  addStyle?: any;
}

export const Container = styled.div<ContainerProps>`
  display: inline-block;
  background: ${({ bgColor }) => bgColor};
  color: ${({ txtColor }) => txtColor};
  margin-right: 4px;
  padding: 3px 15px;
  border-radius: 15px;
  border: 1px solid black;
  ${({ addStyle }) => addStyle}
`;

export const DeleteButton = styled.div`
  display: inline-block;
  user-select: none;
  padding: 0 5px;
`;
