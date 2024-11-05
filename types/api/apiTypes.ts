export interface ReqBodyWithHeaders {
  method: APIMethods;
  url: string;
  client?: string;
  sessionId?: string;
  [name: string]: any;
}

export interface ReqBodyWithoutHeaders {
  method: APIMethods;
  url: string;
  client: string;
  [name: string]: any;
}

export interface ReqBodyWithoutClientHeaders {
  method: APIMethods;
  url: string;
  [name: string]: any;
}

export enum APIMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
