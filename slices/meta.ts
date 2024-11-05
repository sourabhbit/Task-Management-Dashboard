import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DeviceTypes,
  PlatFormTypes,
  MetaType,
  ErrorObjType,
} from "@/types/state/metaTypes";
import { WindowResizeType } from "@/types/hooks";

const initialState: MetaType = {
  deviceType: DeviceTypes.MOBILE,
  platform: PlatFormTypes.MWEB,
  isLoading: true,
  isError: false,
  errorMessage: "",
};

export const metaSlice = createSlice({
  name: "meta",
  initialState,
  reducers: {
    updateDeviceType: (state, action: PayloadAction<WindowResizeType>) => {
      if (action.payload.width === undefined || action.payload.width <= 481) {
        state.deviceType = DeviceTypes.MOBILE;
      } else if (
        action.payload.width != undefined &&
        action.payload.width > 481 &&
        action.payload.width <= 961
      ) {
        state.deviceType = DeviceTypes.TAB;
      } else {
        state.deviceType = DeviceTypes.DESKTOP;
      }
    },
    updatePlatformType: (state, action: PayloadAction<PlatFormTypes>) => {
      state.platform = action.payload;
    },
    setLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setErrorStatus: (state, action: PayloadAction<ErrorObjType>) => {
      state.isError = action.payload.status;
      state.errorMessage = action.payload.message;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  updateDeviceType,
  updatePlatformType,
  setLoadingStatus,
  setErrorStatus,
} = metaSlice.actions;

export default metaSlice.reducer;
