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
import { Overlay } from "@/styles/CommonStyles";

const SecondaryModal = ({
  handleClose,
  isVisible,
  children,
  title,
  showCloseIcon,
  width,
  imgWidth,
  imgHeight,
  className = "",
}: ModalType) => {
  return (
    <>
      <Overlay onClick={handleClose}></Overlay>
      <ModalWrapper
        isVisible={isVisible}
        onClick={!showCloseIcon ? handleClose : () => {}}
      >
        <ModalContent width={width} className={className}>
          <ModalHeader>
            <Title4>{title}</Title4>
            {showCloseIcon && (
              <ModalImageWrapper onClick={handleClose}>
                <Image
                  width={imgWidth}
                  height={imgHeight}
                  src={closeIcon}
                  alt="modalCloseicon"
                />
              </ModalImageWrapper>
            )}
          </ModalHeader>
          {children}
        </ModalContent>
      </ModalWrapper>
    </>
  );
};
export default SecondaryModal;
