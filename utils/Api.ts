import {
  APIMethods,
  ReqBodyWithHeaders,
  ReqBodyWithoutHeaders,
  ReqBodyWithoutClientHeaders,
} from "@/types/api/apiTypes";

export const fetchApi = async (
  obj: ReqBodyWithHeaders | ReqBodyWithoutHeaders | ReqBodyWithoutClientHeaders,
  useHeaders = false
) => {
  if (useHeaders) {
    const { url, client, method, sessionId, ...reqObj } = obj;
    const headers = getHeaders(client, sessionId);
    if (method === APIMethods.GET) {
      return await fetch(url, {
        method,
        headers,
      }).then((res) => res.json());
    } else {
      return await fetch(url, {
        method,
        headers,
        body: JSON.stringify(reqObj),
      }).then((res) => res.json());
    }
  } else {
    const { url, ...reqObj } = obj;
    return await fetch(url, { ...reqObj }).then((res) => res.json());
  }
};

export const fetchApiSession = async (
  obj: ReqBodyWithHeaders | ReqBodyWithoutHeaders | ReqBodyWithoutClientHeaders,
  useHeaders = false
) => {
  if (useHeaders) {
    const { url, client, method, sessionId, ...reqObj } = obj;
    const headers = getHeadersSession(client, sessionId);
    if (method === APIMethods.GET) {
      return await fetch(url, {
        method,
        headers,
      }).then((res) => res.json());
    } else {
      return await fetch(url, {
        method,
        headers,
        body: JSON.stringify(reqObj),
      }).then((res) => res.json());
    }
  } else {
    const { url, ...reqObj } = obj;
    return await fetch(url, { ...reqObj }).then((res) => res.json());
  }
};

export const getApiBaseUrl = () => {
  let baseurl = process.env.BASE_URL;
  return baseurl;
};

const getHeaders = (client: string, sessionId: string) => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-client": client,
    Authorization: `Bearer ${sessionId}`,
  };
};

const getHeadersSession = (client: string, sessionId: string) => {
  return {
    "Content-Type": "application/json",
    "x-api-client": client,
    "x-session-token": sessionId,
  };
};

export const clearAllTokens = () => {
  window.location.reload();
};
