import React from "react";
import {useState} from "react";
import {createPost} from "../service/PostsService";
import CreatePostModel from "../interface/PostModel";
import {ImageUpload} from "../component/ImageUpload";

const CreatePost = (): JSX.Element => {

    const [post, setPost] = useState<CreatePostModel>({user: 'baris', header: '', content: ''});
    const [imageUrl, SetImageUrl] = useState<string>('');

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
            <div className="flex flex-col items-stretch w-[80%] min-w-[80%] max-w-[80%]sm:w-[40%] sm:min-w-[40%] sm:max-w-[40%]">
                <h1 className="font-medium leading-tight text-5xl mt-8 mb-2 sm:mb-4 text-white text-center">Create Post</h1>
                <div className="mb-8 mt-4 sm:mt-0 rounded-lg shadow-sm md:mb-12">
                    <figure className="flex flex-col p-8 rounded-t-lg rounded-b-lg bg-slate-800 text-gray-300">
                        <blockquote className="flex flex-col items-center text-white lg:mb-8 dark:text-gray-400">

                            <label htmlFor="message"
                                   className="block mb-2 mt-8 text-md font-medium text-white">Your
                                message</label>
                            <textarea id="message" rows={4}
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-gray-900 outline-none"
                                      placeholder="Write your thoughts here..."></textarea>
                        </blockquote>
                        <ImageUpload />
                        <button className="mt-4 rounded-lg text-gray-300 hover:bg-teal-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium bg-teal-900">Post</button>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;