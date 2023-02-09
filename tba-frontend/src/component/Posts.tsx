import React, { useEffect } from "react";
import { useState } from "react";
import { getPosts } from "../service/PostsService";
import moment from "moment";

interface Post {
  user: string;
  header: string;
  content: string;
  date: Date
}

const Posts = (): JSX.Element => {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {

    getPosts().then(
      (res) => {
        if (res.status === 200) {
          setPosts(res.data);
        } else {
          console.log(res);
        }
      }
    );
  }, [])

  const onPostSelect = (i: number): void => {
    console.log(`selected post: ${posts[i].content}`);;
  }

  const generateContentString = (content: string): string => {
    if (content.length > 30) {
      return content; //content.substring(0, 27) + "...";

    } else return content;
  }

  return (
    <>
      <h1 className="font-medium leading-tight text-5xl mt-8 mb-2 text-white text-center">Posts</h1>
      {
        posts.map((post, i) => {
          return (
            <>
              <div className="grid mb-8 mt-8 ml-[30%] mr-[30%] rounded-lg shadow-sm md:mb-12 cursor-pointer"
                onClick={() => onPostSelect(i)}>
                <figure className="flex flex-col p-8 rounded-t-lg rounded-b-lg bg-slate-800">
                  <blockquote className="flex flex-col text-white lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-white dark:text-white">{post.header}</h3>
                    <p className="my-4 font-light break-all">{generateContentString(post.content)}</p>
                  </blockquote>
                  <figcaption className="flex justify-between">
                    <div className="flex space-x-5">
                      <img className="rounded-full w-6 h-6" src="/images/osman.png" alt="profile picture" />
                      <div className="font-medium dark:text-white">
                        <div className="text-white">{post.user}</div>
                        <div className="text-xs font-light text-gray-400 dark:text-gray-400">user description</div>
                      </div>
                    </div>
                    <div className="text-xs font-light text-gray-400 dark:text-gray-400">
                      {moment(post.date).format("DD-MMM-YYYY HH:mm:ss")}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </>
          );
        })
      }
    </>
  );
}

export default Posts;