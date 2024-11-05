import styled from "styled-components";

// normal input style
export const InputWrapper = styled.div<{
  isError: boolean;
  showCaret?: boolean;
}>`
  width: 100%;
  input {
    --moz-appearance: textfield;
    border-radius: 8px;
    padding: 18px 0px 18px 20px;
    box-sizing: border-box;
    height: 48px;
    outline: none;
    font-family: var(--font);
    width: 100%;
    caret-color: ${(props) => (props.showCaret ? "" : "transparent")};
    cursor: ${(props) => (props.showCaret ? "text" : "pointer")};
    border: ${(props) =>
      props.isError ? "1px solid var(--fire-opal-error)" : "1px solid #e4eaef"};
    &:focus {
      box-shadow: none;
      border: ${(props) =>
        props.isError
          ? "1px solid var(--fire-opal-error)"
          : "1px solid var(--eerie-black-primary)"};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &::placeholder {
      font-weight: var(--fw-sm);
      font-size: 16px;
      color: var(--slate-gray-secondary);
      font-family: var(--font);
    }
  }

  select {
    --moz-appearance: textfield;
    border-radius: 8px;
    padding: 14px 0px 14px 18px;
    box-sizing: border-box;
    height: 48px;
    outline: none;
    font-family: var(--font);
    width: 100%;
    caret-color: ${(props) => (props.showCaret ? "" : "transparent")};
    cursor: ${(props) => (props.showCaret ? "text" : "pointer")};
    border: ${(props) =>
      props.isError ? "1px solid var(--fire-opal-error)" : "1px solid #e4eaef"};
    &:focus {
      box-shadow: none;
      border: ${(props) =>
        props.isError
          ? "1px solid var(--fire-opal-error)"
          : "1px solid var(--eerie-black-primary)"};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &::placeholder {
      font-weight: var(--fw-sm);
      font-size: 16px;
      color: var(--slate-gray-secondary);
      font-family: var(--font);
    }
  }

  .invalid-feedback {
    display: block;
    font-weight: 500;
    font-size: 12px;
    font-family: var(--font);
    color: var(--fire-opal-error);
  }
`;

export const SelectInputWrapper = styled.div<{ width?: string }>`
  cursor: pointer;
  position: relative;
  width: ${(props) => props.width};
  .invalid-feedback {
    display: block;
    font-weight: 500;
    font-size: 12px;
    font-family: var(--font);
    color: var(--fire-opal-error);
  }
`;

export const DropdownWrapper = styled.div<{}>`
  display: flex;
  flex-direction: column;
`;

export const SelectWrapper = styled.div<{
  showOptions: boolean;
  initial?: boolean;
  isError?: boolean;
}>`
  padding: 4px 8px 4px 16px;
  gap: 4px;
  width: 100%;
  height: 48px;
  background: #ffffff;
  box-sizing: border-box;

  border: 1px solid
    ${(props) =>
      props.isError
        ? "var(--fire-opal-error)"
        : props.showOptions
        ? "var(--eerie-black-primary)"
        : "var(--bright-gray-divider)"};
  border-radius: 12px;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.initial ? "#6A768A" : "#0F1623")};
  font-weight: 400;
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
  /* top: -50%; */
  width: 100%;
  overflow: auto;
  margin-top: 8px;
  z-index: 2;
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

export const DropdownImageWrapper = styled.div`
  margin-right: 20px;
`;

//calendar input
export const CalendarButton = styled.span`
  position: absolute;
  top: 10px;
  right: 28px;
  cursor: pointer;
`;

export const CalendarWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  .Calendar__monthArrowWrapper {
    visibility: hidden;
  }
  .Calendar__monthText::after {
    content: "↓";
  }
  .Calendar__yearText::after {
    content: "↓";
  }
`;
