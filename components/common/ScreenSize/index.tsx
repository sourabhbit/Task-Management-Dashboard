import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { updateDeviceType } from "../../../slices/meta";
import { RootState } from "../../../slices/store";

const ScreenSize = ({ children }: any) => {
  const size = useWindowSize();
  const dispatch = useDispatch();
  const metaData = useSelector((state: RootState) => state.meta);

  useEffect(() => {
    dispatch(updateDeviceType(size));
    document.body.dataset.device = metaData.deviceType;
  }, [dispatch, metaData.deviceType, size]);

  return <>{children}</>;
};

export default ScreenSize;
