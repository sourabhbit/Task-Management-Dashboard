import React from "react";
import { UnderlineTextWrapper } from "./textStyles";

interface PropTypes {
  text: string;
}
const UnderlineText = ({ text }: PropTypes) => {
  return <UnderlineTextWrapper>{text}</UnderlineTextWrapper>;
};

export default UnderlineText;
