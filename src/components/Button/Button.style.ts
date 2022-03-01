/* eslint-disable consistent-return */
import styled, { css } from "styled-components";

export const Wrapper = styled.button<{
  btnTheme: "primary" | "secondary";
  disable: boolean;
}>`
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

  ${({ theme, btnTheme, disable }) => {
    let style;
    if (disable) {
      style = css`
        background: ${theme.color.bg01};
        color: ${theme.color.fc02};
        border: 1px ${theme.color.fc02} solid;
        cursor: default;
      `;
    } else if (btnTheme === "primary") {
      style = css`
        background: ${theme.color.bg07};
        color: ${theme.color.fc04};
      `;
    } else if (btnTheme === "secondary") {
      style = css`
        background: ${theme.color.bg05};
        color: ${theme.color.fc01};
      `;
    }
    return style;
  }};

  &:hover {
    ${({ theme, btnTheme, disable }) => {
      let style;
      if (disable === false && btnTheme === "primary") {
        style = css`
          background: ${theme.color.bg08};
        `;
      } else if (disable === false && btnTheme === "secondary") {
        style = css`
          background: ${theme.color.bg06};
        `;
      }
      return style;
    }};
  }
`;

/* export const CancelButton = styled(ButtonStyle)``;

export const ConfirmButton = styled(ButtonStyle)<{ isDestructive: boolean }>`
  background: ${({ theme, isDestructive }) =>
    isDestructive ? "red" : theme.color.bg03};
  &:hover {
    background: ${({ theme, isDestructive }) =>
      isDestructive ? "red" : theme.color.bg04};
  }
  color: ${({ theme }) => theme.color.fc04}; ;
`; */

/* &:hover {
    ${({ theme, btnTheme, disable }) => {
      let style;
      if (disable === false && btnTheme === "primary") {
        style = css`
          background: ${theme.color.bg01};
        `;
      } else if (disable === false && btnTheme === "secondary") {
        style = css`
          box-shadow: 0 0 6px 0 ${theme.color.point};
        `;
      }
      return style;
    }};
  } */
