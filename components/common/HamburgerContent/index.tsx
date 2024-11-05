import React, { useState } from "react";
import { MobileContent, LogoutWrapper } from "./HamburgerContentStyles";
import RenderModalOrBottomSheet from "../RenderModalBS";
import SecondaryButton from "../Button/secondaryButton";
import Button from "../Button";
import { clearAllTokens } from "@/utils/Api";
import { Flex } from "@/styles/CommonStyles";

const HamburgerContent = () => {
  const [isLogoutPopup, setLogoutPopup] = useState(false);

  const handleLogout = () => {
    clearAllTokens();
  };

  return (
    <>
      <MobileContent></MobileContent>
      <RenderModalOrBottomSheet
        isVisible={isLogoutPopup}
        onClose={() => setLogoutPopup(false)}
      >
        <LogoutWrapper>
          <p className="logoutText">Are you sure you want to logout ?</p>
          <Flex gap={15}>
            <SecondaryButton
              color="#000"
              borderColor="#000"
              onClick={handleLogout}
            >
              Yes, Logout
            </SecondaryButton>
            <Button onClick={() => setLogoutPopup(false)}>No</Button>
          </Flex>
        </LogoutWrapper>
      </RenderModalOrBottomSheet>
    </>
  );
};

export default HamburgerContent;
