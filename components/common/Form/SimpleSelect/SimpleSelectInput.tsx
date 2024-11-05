import { RevampDropdownTypes } from "@/types/component";
import React, { forwardRef, useRef, useState } from "react";
import { FormError, FormGroup, FormLabel } from "@/styles/FormStyles";
import useClickOutside from "hooks/useClickOutside";
import { InputWrapper } from "../FormStyles";
export interface DropDownTypes {
  id: number;
  value: string;
  label: string;
}
const SimpleSelectInput = forwardRef(
  ({
    options,
    onChange,
    error,
    title = "",
    showCaret = true,
    value,
    isNonMarginBottom,
    atStart = true,
  }: RevampDropdownTypes) => {
    return (
      <InputWrapper isError={error ? true : false} showCaret={showCaret}>
        <FormGroup
          className={isNonMarginBottom ? "" : "mb-3"}
          style={{ width: "100%" }}
        >
          {atStart && title && (
            <FormLabel className="formLabel">{title}</FormLabel>
          )}
          <select
            id="options"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{ cursor: "pointer !important" }}
            data-testid="select-element"
          >
            {options.map((item: DropDownTypes, index: number) => {
              return (
                <option
                  value={item.value}
                  key={index}
                  selected={item.value === value}
                >
                  {item.label}
                </option>
              );
            })}
          </select>
          {error && <FormError className="invalid-feedback">{error}</FormError>}
        </FormGroup>
      </InputWrapper>
    );
  }
);

SimpleSelectInput.displayName = "SimpleSelectInput";

export default SimpleSelectInput;
