import axios from "axios";
import AxiosConfigModel from "../interface/AxiosConfigModel";
import CreatePostModel from "../interface/CreatePostModel";

const config: AxiosConfigModel = {
  baseUrl: "http://localhost:8080/posts",
  headers: {},
}

export const getPosts = async (): Promise<any> => {
  return await axios.get(`${config.baseUrl}/get-posts`)
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

export const createPost = async (post: CreatePostModel): Promise<any> => {
  console.log(post);
  
  return await axios.post(`${config.baseUrl}/create-post`, post)
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