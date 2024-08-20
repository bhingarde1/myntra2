import axios from "axios";
// import {
//   getFromLocalStorage,
//   saveToLocalStorage,
// } from "../components/LocalStorage/localStorage";
// import Toast from "@/components/Toast/Toast";

  const BASE_URL = process.env.REACT_APP_BASE_URL;

// const getToken = async () => {
//   const userInfo = await getFromLocalStorage("token");
//   return userInfo || "";
// };

const post = async (url: string, params: {}, headers?: {}): Promise<any> => {
  try {
    // const token = await getToken();
    const _headers = {
      headers: { ...headers, Authorization: "string" },
    };
    const response = await axios.post( url, params, _headers);
    return response.data;
  } catch (error: any) {
    // Toast({ icon: "error", title: "Something went wrong" });
  }
};

const get = async (
  url: string,
  params?: {},
  headers?: {},
  cancelToken?: any
): Promise<any> => {
  try {
    // const token = await getToken();
    const config: any = {
      params,
      headers: { ...headers,  },
      cancelToken: cancelToken,
    };

    const response = await axios.get(BASE_URL +  url, config);

    return response;
  } catch (error: any) {
    // Toast({ icon: "error", title: "Something went wrong" });
  }
};

const deleteApi = async (url: string, params: {}, headers?: {}) => {
  try {
    // const token = await getToken();

    const response = await axios.delete(  url, {
      params,
      headers: { ...headers, Authorization: `` },
    });
    return response;
  } catch (error: any) {
    // Toast({ icon: "error", title: "Something went wrong" });
  }
};

const put = async (url: string, params?: {}, headers?: {}, query?: {}) => {
  try {
    // const token = await getToken();
    const _headers = {
      headers: { ...headers, Authorization:  'string'}
    };
    const response = await axios.put(  url, params, {
      ..._headers,
      params: query,
    });
    return response;
  } catch (error: any) {
    // Toast({ icon: "error", title: "Something went wrong" });
  }
};

export const API = {
  post,
  get,
  put,
  deleteApi,
};
