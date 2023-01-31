import axios from "axios";

interface Params {
  baseUrl: string;
  headers: any;
}

const config: Params = {
  baseUrl: "http://localhost:8080/posts",
  headers: {},
}

export const getRequests = async (data: any): Promise<any> => {
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