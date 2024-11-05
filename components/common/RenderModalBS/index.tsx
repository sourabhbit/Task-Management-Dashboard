import { Overlay } from "@/styles/CommonStyles";
import React, { useEffect } from "react";
import { Sheet } from "react-modal-sheet";
import SecondaryModal from "../Modal/SecondaryModal";
import { FlexCol, Title4 } from "@/styles/CommonStyles";

interface Props {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: (status: boolean) => void;
  modalWidth?: string;
  title?: string;
}
const RenderModalOrBottomSheet = ({
  children,
  isVisible,
  onClose,
  modalWidth,
  title = "",
}: Props) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isVisible]);
  if (isVisible) {
    if (typeof window != "undefined" && window?.WURFL?.is_mobile) {
      return (
        <Sheet
          isOpen={isVisible}
          onClose={() => onClose(false)}
          detent="content-height"
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Scroller>
              <Sheet.Content style={{ padding: "0 16px 16px 16px" }}>
                <FlexCol>
                  <Title4>{title}</Title4>
                  {children}
                </FlexCol>
              </Sheet.Content>
            </Sheet.Scroller>
          </Sheet.Container>
          <Sheet.Backdrop onTap={() => onClose(false)} />
        </Sheet>
      );
    } else {
      return (
        <>
          <Overlay
            onClick={() => {
              onClose(false);
            }}
          ></Overlay>
          <SecondaryModal
            isVisible={isVisible}
            width={modalWidth ? modalWidth : "450px"}
            showCloseIcon
            imgHeight={15}
            imgWidth={15}
            handleClose={() => onClose(false)}
            title={title}
          >
            {children}
          </SecondaryModal>
        </>
      );
    }
  } else {
    return <></>;
  }
};

export default RenderModalOrBottomSheet;
