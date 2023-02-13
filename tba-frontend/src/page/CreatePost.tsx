import React from "react";
import { useState } from "react";
import { createPost } from "../service/PostsService";
import CreatePostModel from "../interface/PostModel";

const CreatePost = (): JSX.Element => {

  const [post, setPost] = useState<CreatePostModel>({ user: 'baris', header: '', content: '' });

  const handleUserChange = (event: any) => {
    const user: string = event.target.value;
    post.user = user;
    setPost(post);
  }

  const handleHeaderChange = (event: any) => {
    const header: string = event.target.value;
    post.header = header;
    setPost(post);
  }

  const handleContentChange = (event: any) => {
    const content: string = event.target.value;
    post.content = content;
    setPost(post);
  }

  const createThePost = () => {
    createPost(post).then(
      (res) => {
        if (res.status === 200) {
          console.log("success!");

        } else {
          console.log(res);
        }
      }
    );
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center mt-8 w-1/2">
      <textarea id="content" rows={2} className="mt-8 block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-gray-900 outline-none" placeholder="Header" onChange={handleHeaderChange}></textarea>
        
        <textarea id="content" rows={5} className="mt-8 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-gray-900 outline-none" placeholder="Write your thoughts here..." onChange={handleContentChange}></textarea>
        
        <button className="mt-8 bg-gray-800 text-white font-bold w-1/4 py-3 rounded-md hover:bg-gray-700 hover:text-white" onClick={createThePost}>
          Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;