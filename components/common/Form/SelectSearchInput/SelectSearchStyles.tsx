import styled from "styled-components";

export const DropdownImageWrapper = styled.div`
  position: absolute;
  right: 10px;
  img {
    width: 8px;
    height: 8px;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 12px 24px;
  font-weight: 400;
  font-size: 16px;
  color: #0f1623;
  &:hover {
    background-color: #e4eaef;
    cursor: pointer;
  }
`;

export const OptionWrapper = styled.div<{}>`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e4eaef;
  box-shadow: 0px 0px 20px rgb(232 235 242 / 25%);
  border-radius: 4px;
  position: absolute;
  max-height: 20vh;
  width: 100%;
  overflow: auto;
  margin-top: 55px;
  z-index: 2;
`;
