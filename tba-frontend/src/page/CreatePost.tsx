import React, {useEffect, useState} from "react";
import {createPost} from "../service/PostsService";
import CreatePostModel from "../interface/CreatePostModel";
import {storage} from '../config/firebase';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid';

const CreatePost = (): JSX.Element => {

    const [post, setPost] = useState<CreatePostModel>({imageUrl: '', content: ''});
    const [image, setImage] = useState();
    const [preview, setPreview] = useState<string>();

    useEffect(() => {
        if (!image) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(image);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [image]);

    const handleImageChange = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setImage(undefined);
            return;
        }
        setImage(e.target.files[0]);
    }

    const handleContentChange = (event: any) => {
        post.content = event.target.value;
        setPost(post);
    }

    const createThePost = () => {
        if (image == null) return;

        const imageId = v4();
        const imageRef = ref(storage, `images/${imageId}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            // create post after successful image upload
            getDownloadURL(snapshot.ref).then((url) => {
                post.imageUrl = url;
                createPost(post).then(
                    (res) => {
                        if (res.status === 200) {
                            console.log("success!");

                        } else {
                            console.log(res);
                        }
                    }
                );
            })
        });
    }

    return (
        <div className="flex justify-center">
            <div
                className="flex flex-col items-stretch w-[80%] min-w-[80%] max-w-[80%]sm:w-[40%] sm:min-w-[40%] sm:max-w-[40%]">
                <h1 className="font-medium leading-tight text-5xl mt-8 mb-2 sm:mb-4 text-white text-center">Create
                    Post</h1>
                <div className="mb-8 mt-4 sm:mt-0 rounded-lg shadow-sm md:mb-12">
                    <figure className="flex flex-col p-8 rounded-t-lg rounded-b-lg bg-slate-800 text-gray-300">
                        <div className="flex flex-col items-center">
                            <label htmlFor="image"
                                   className="rounded-lg text-gray-300 mb-4 hover:bg-teal-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium bg-teal-900">Upload
                                image</label>
                            <input id="image" className="hidden rounded mb-4 rounded-lg" type='file'
                                   onChange={handleImageChange} accept="image/*"/>
                            {image && <img className="mb-4" src={preview}/>}
                        </div>
                        <blockquote className="flex flex-col items-center text-white lg:mb-8 dark:text-gray-400">
                            <textarea id="message" rows={4}
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-gray-900 outline-none"
                                      placeholder="Write your thoughts here..."
                                      onChange={handleContentChange}>
                            </textarea>
                        </blockquote>
                        <button
                            className="mt-4 rounded-lg text-gray-300 hover:bg-teal-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium bg-teal-900"
                            onClick={createThePost}>Post
                        </button>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;