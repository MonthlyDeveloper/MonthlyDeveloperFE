import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const ProjectItemWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 48%;
  margin: 1%;
  ${({ theme }) => theme.media.mobile`
    width: 100%;
  `};
`;
