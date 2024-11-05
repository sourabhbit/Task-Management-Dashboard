export interface MetaType {
  deviceType: DeviceTypes;
  platform: PlatFormTypes;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export interface bookLaterType {
  cityId: string;
  cityObjectId: string;
  cod: boolean;
  dateObjectId: string;
  enabled: boolean;
  htoId: string;
  postcode: string;
  slotObjectId: string;
}
export interface LocationType {
  // locationData: string;
  bookNow: object;
  bookLater: bookLaterType;
}

export interface HECType {
  orderId: string;
  itemId: string;
  HECSessionId: string;
  isHEC: boolean;
}

export enum DeviceTypes {
  MOBILE = "mobile",
  TAB = "tab",
  DESKTOP = "desktop",
}

export enum PlatFormTypes {
  IOS = "ios",
  ANDROID = "android",
  MWEB = "m-web",
  DESKTOP = "desktop",
}

export interface ErrorObjType {
  message: string | "";
  status: boolean;
}
