import { ModalType } from "@/types/component";
import Image from "next/image";
import closeIcon from "@/image/closeIcon.png";
import {
  ModalHeader,
  ModalTitle,
  ModalWrapper,
  ModalContent,
  ModalImageWrapper,
} from "./style";
import { Title4 } from "@/styles/HomeStyles";

const Modal = ({
  handleClose,
  isVisible,
  children,
  title,
  showCloseIcon,
  width,
  imgWidth,
  imgHeight,
  onlyIconClose,
  isNonPadding,
  bgColor = "",
  style,
}: ModalType) => {
  return (
    <ModalWrapper
      isVisible={isVisible}
      onClick={!onlyIconClose ? handleClose : () => null}
    >
      <ModalContent
        width={width}
        isNonPadding={isNonPadding}
        bgColor={bgColor}
        style={style}
      >
        <ModalHeader>
          <Title4>{title}</Title4>
          {showCloseIcon && (
            <ModalImageWrapper onClick={handleClose}>
              <Image
                src={closeIcon}
                alt="modalCloseicon"
                width={imgWidth}
                height={imgHeight}
              />
            </ModalImageWrapper>
          )}
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};
export default Modal;
