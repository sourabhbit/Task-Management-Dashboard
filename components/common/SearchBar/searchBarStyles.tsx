import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchInput = styled.input`
  padding: 4px 0px 4px 50px;
  gap: 1px;
  min-height: 48px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e4eaef;
  border-radius: 12px;
  position: relative;
  &:focus-visible {
    outline: 1px solid #0f1623;
  }
`;

export const SearchButton = styled.span`
  position: absolute;
  z-index: 1;
  padding-left: 18px;
`;
