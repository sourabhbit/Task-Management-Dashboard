import { useSelector } from "react-redux";
import {
  HeaderWrapper,
  FixedHeaderWrapper,
} from "@/components/common/AppHeaderHomepage/headerStyles";
import { DeviceTypes } from "@/types/state/metaTypes";
import { Flex } from "@/styles/CommonStyles";
import { RootState } from "slices/store";
import HeaderLogo from "./headerLogo";

const AppHeaderHomepage = () => {
  const metaData = useSelector((state: RootState) => state.meta);
  const isMobile = metaData.deviceType === DeviceTypes.MOBILE;
  const isTab = metaData.deviceType === DeviceTypes.TAB;
  const isResponsive = isMobile || isTab;

  return (
    <>
      <FixedHeaderWrapper
        width="100%"
        alignItems="center"
        justifyContent="center"
        isMobile={isMobile}
        id="stable-header"
      >
        <HeaderWrapper isResponsive={isResponsive} isMobile={isMobile}>
          <Flex
            gap={30}
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex alignItems="center">
              <HeaderLogo isResponsive={isResponsive} isHideMenu={false} />
            </Flex>
          </Flex>
        </HeaderWrapper>
        <hr />
      </FixedHeaderWrapper>
    </>
  );
};

export default AppHeaderHomepage;
