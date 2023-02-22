import axios from "axios";
import AxiosConfigModel from "../interface/AxiosConfigModel";
import CreatePostModel from "../interface/CreatePostModel";
import {storage} from "../config/firebase";
import {ref, listAll, getDownloadURL} from "firebase/storage";

// todo: return ederken liste bos gidiyor pushlarken sorun yok. ya bunu duzelt yada diger sinifta post uzerinden
// todo: cekmeye don

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

export const getImages = async (): Promise<any> => {
  const imageListRef = ref(storage, "images/");
  let images: any[] = [];
  listAll(imageListRef).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        images.push(url);
        console.log(images)
      });

      console.log(images);
      return images;
  })}).catch((error) => {
    console.log(error);
  });
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