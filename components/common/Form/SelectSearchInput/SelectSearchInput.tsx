import { RevampDropdownTypes } from "@/types/component";
import Image from "next/image";
import React, { forwardRef, useRef, useState } from "react";
import {
  DropdownImageWrapper,
  Option,
  OptionWrapper,
} from "./SelectSearchStyles";
import arrowDown from "@/image/arrowDown.svg";
import arrowUp from "@/image/arrowUp.svg";
import { Flex, FlexCol } from "@/styles/CommonStyles";
import { FormLabel } from "@/styles/FormStyles";
import Input from "../input";
import useClickOutside from "hooks/useClickOutside";
import { calendar } from "@/utils/helper";

const SelectSearchInput = forwardRef(
  ({
    options,
    onChange,
    error,
    title = "",
    width,
    showArrow = true,
    showCaret = true,
    placeHolder = "",
    value = "",
    createUserInput = false,
    filterBy = "value",
    filterName = "",
    searchInput = false,
  }: RevampDropdownTypes) => {
    const [showOptions, setShowOptions] = useState(false);
    const [userInput, setUserInput] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [filteredOption, setFilteredOption] = useState(options);
    const dropDownRef = useRef<any>(null);

    useClickOutside(dropDownRef, () => {
      setShowOptions(false);
    });

    const onInputChange = (value: any) => {
      setInputValue(value);
      if (createUserInput) {
        setUserInput(value);
      }
      if (value.length === 0) {
        setFilteredOption(options);
        setShowOptions(true);
      } else {
        setFilteredOption(
          options.filter((item: any) =>
            item[filterBy]
              .toString()
              .toLowerCase()
              .includes(value.toString().toLowerCase())
          )
        );
      }
    };

    const onEnterPress = (value: any) => {
      if (filteredOption.length > 0) {
        onChange(filteredOption[0].value);
        setInputValue(filteredOption[0][filterBy]);
        setShowOptions(false);
      } else {
        if (!searchInput) {
          setInputValue("");
          onChange("");
        } else {
          onChange(value);
        }

        // setInputValue(item[filterBy]);
        setShowOptions(false);
      }
      setFilteredOption(options);
    };

    const onOptionSelect = (item: any) => {
      onChange(item.value);
      setInputValue(item[filterBy]);
      setFilteredOption(options);
      setShowOptions(false);
    };

    const showInputValue = (inputValue: any, filterName: string) => {
      if (filterName === "year") {
        if (typeof inputValue === "string") {
          return inputValue;
        } else {
          return calendar[inputValue];
        }
      } else {
        return inputValue;
      }
    };
    return (
      <>
        {title && <FormLabel className="formLabel">{title}</FormLabel>}
        <FlexCol
          className="select-search-wrapper"
          width={width}
          style={{
            position: "relative",
          }}
          ref={dropDownRef}
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            gap={20}
            onClick={() => setShowOptions(!showOptions)}
            style={{
              position: "relative",
            }}
          >
            {searchInput ? (
              <Input
                type="text"
                value={showInputValue(inputValue, filterName)}
                placeholder={placeHolder}
                error=""
                autoComplete="off"
                onChange={(e: any) => onInputChange(e.target.value)}
                onKeyDown={(e: any) => {
                  if (e.keyCode === 13) {
                    onEnterPress(e.target.value);
                  }
                  if (e.keyCode === 8) {
                    setShowOptions(true);
                  }
                  if (e.keyCode === 9) {
                    setShowOptions(false);
                  }
                }}
                onClick={() => setInputValue("")}
                showCaret={showCaret}
              />
            ) : (
              <Input
                type="text"
                value={showInputValue(inputValue, filterName)}
                placeholder={placeHolder}
                error=""
                autoComplete="off"
                onChange={(e: any) => onInputChange(e.target.value)}
                onKeyDown={(e: any) => {
                  if (e.keyCode === 13) {
                    onEnterPress(e.target.value);
                  }
                  if (e.keyCode === 8) {
                    setShowOptions(true);
                  }
                  if (e.keyCode === 9) {
                    setShowOptions(false);
                  }
                }}
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
                showCaret={showCaret}
              />
            )}

            {showArrow && (
              <DropdownImageWrapper>
                {showOptions ? (
                  <Image src={arrowUp} alt="arrowUp" />
                ) : (
                  <Image src={arrowDown} alt="arrowDown" />
                )}
              </DropdownImageWrapper>
            )}
          </Flex>
          {showOptions && (
            <OptionWrapper>
              {filteredOption.length < 1 && (
                <Option data-testid="option-wrapper">
                  {createUserInput ? userInput : "No Result"}
                </Option>
              )}
              {filteredOption?.map((option: any, index: number) => {
                return (
                  <Option
                    data-testid="option-wrapper"
                    onClick={() => onOptionSelect(option)}
                    key={index}
                  >
                    {option.label}
                  </Option>
                );
              })}
            </OptionWrapper>
          )}
        </FlexCol>
        {error && <p className="invalid-feedback">{error}</p>}
      </>
    );
  }
);

SelectSearchInput.displayName = "SelectSearchInput";

export default SelectSearchInput;
