import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  border: 1px ${({ theme }) => theme.color.lc01} solid;
  cursor: pointer;
  &:hover {
    border: 1px ${({ theme }) => theme.color.lc02} solid;
  }
`;

export const StatusWrapper = styled.section`
  align-self: flex-start;
  min-width: 57px;
`;

export const Flex = styled.section`
  display: flex;
  align-items: center;
`;

export const ChipList = styled(Flex)`
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  margin-right: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
  font-weight: 500;
`;

export const UserName = styled.article`
  margin: 5px 0;
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.color.fc02};
  font-weight: 500;
`;

export const DetailsWrapper = styled.section``;
