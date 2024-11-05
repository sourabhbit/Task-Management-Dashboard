import {
  ChangeEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  WheelEvent,
} from "react";

export interface FooterType {
  children: React.ReactNode;
}

export interface InputTypes {
  title?: string;
  placeholder: string;
  type: string;
  onChange?: any;
  value?: string;
  error: string;
  maxLength?: any;
  onKeyDown?: any;
  onBlur?: any;
  onFocus?: any;
  onClick?: () => void;
  isNonMarginBottom?: boolean;
  autoFocus?: boolean;
  name?: string;
  atStart?: boolean;
  atEnd?: boolean;
  required?: boolean;
  onWheel?: any;
  tabIndex?: number;
  autoComplete?: string;
  showCaret?: boolean;
  label?: string;
  readOnly?: boolean;
}

export interface FormInputType {
  label: string;
  type: string;
  name?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress?: KeyboardEventHandler<HTMLInputElement>;
  errorMessage?: string;
  isValid?: boolean;
  value: string | number;
  showError?: boolean;
  pattern?: string;
  maxlength?: number;
  marginTop?: string;
  autofocus?: boolean;
  inputmode?: any;
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: string;
}

export interface ModalType {
  handleClose?: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  isVisible: boolean;
  children: React.ReactNode;
  title?: string;
  showCloseIcon?: boolean;
  width?: string;
  imgWidth?: number;
  imgHeight?: number;
  onlyIconClose?: boolean;
  isNonPadding?: boolean;
  bgColor?: string;
  style?: any;
  className?: string;
}

export interface FormErrorTypes {
  phone?: string | undefined;
  location?: string | undefined;
  name?: string | undefined;
  flatHouse?: any | undefined;
}

export interface DropdownTypes {
  options: any;
  selectedDefault?: number;
  onChange: any;
  onInputChange?: any;
  placeHolder?: string;
  error?: string;
  inputValue?: string;
  isShowInitialValue?: boolean;
  initialText?: string;
  isThereImages?: boolean;
  title?: string;
  titleFontWeight?: string;
  tabIndex?: number;
  width?: string;
  onChangeVal?: any;
  showArrow?: boolean;
}

export interface ShareTrayTypes {
  setModalVisible: (string: boolean) => void;
  isModalVisible: boolean;
  referralUrl: string;
  customEvent: string;
  title?: string;
  sharingMessage: string;
}

export interface RevampDropdownTypes {
  options: any;
  onChange: any;
  placeHolder: string;
  error?: string;
  title?: string;
  width?: string;
  showArrow?: boolean;
  showCaret: boolean;
  createUserInput?: boolean;
  value: any;
  filterBy?: string; //to pass filter by key name
  filterName?: string; //type of filter like year or number or name
  searchInput?: boolean;
  isNonMarginBottom?: boolean;
  atStart?: boolean;
}
