import React from "react";
import { SearchBarWrapper, SearchButton, SearchInput } from "./searchBarStyles";
import Image from "next/image";
import SearchIcon from "@/image/icons/searchIcon.svg";

const SearchBar = ({ handleChange, placeHolder, value }: any) => {
  return (
    <SearchBarWrapper>
      <SearchButton onClick={() => null}>
        <Image src={SearchIcon} alt="stable_money_search_icon" />
      </SearchButton>
      <SearchInput
        placeholder={placeHolder}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
