import axios from "axios";
import AxiosConfigModel from "../interface/AxiosConfigModel";

const config: AxiosConfigModel = {
  baseUrl: "http://localhost:8080/posts",
  headers: {},
}

export const getPosts = async (): Promise<any> => {
  return await axios.get(`${config.baseUrl}/getPosts`)
  .then((response) => {
    console.log(response);
    return {
      status: response.status,
      data: response.data
    }
  }).catch((error) => {
    console.log(error);
    return {
      status: error.status,
      data: error.response
    }
  })
}

/*

export const getPosts = async (data: any): Promise<any> => {
  return await axios ({
    method: "get",
    url: `${config.baseUrl}/getPosts`,
    data
  }).then((response) => {
    console.log(response);
    return {
      status: response.status,
      data: response.data
    }
  }).catch((error) => {
    console.log(error);
    return {
      status: error.status,
      data: error.response
    }
  })
}

*/