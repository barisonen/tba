import axios from "axios";
import PostModel from "../interface/PostModel";
import AxiosConfigModel from "../interface/AxiosConfigModel";

const config: AxiosConfigModel = {
  baseUrl: "http://localhost:8080/posts",
  headers: {},
}

export const createPost = async (post: PostModel): Promise<any> => {
  console.log(post);
  
  return await axios.post(`${config.baseUrl}/createPost`, post)
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