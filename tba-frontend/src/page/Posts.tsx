import {useEffect} from "react";
import {useState} from "react";
import {getPosts} from "../service/PostsService";
import moment from "moment";
import PostModel from "../interface/PostModel";

// todo: sort calismiyor

const Posts = (): JSX.Element => {

  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    getPosts().then((response) => {
      if (response.status === 200) {
        let posts: PostModel[] = response.data;
        console.log(posts);
        posts = posts.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
        console.log(posts)
        setPosts(posts);
      }
    });
  }, [])

  const onPostSelect = (i: number): void => {
    console.log(`selected post: ${posts[i].content}`);
  }

  const generateContentString = (content: string): string => {
    if (content.length > 30) {
      return content;

    } else return content;
  }

  return (
    <div className="flex justify-center">
      <div
        className="flex flex-col items-stretch w-[80%] min-w-[80%] max-w-[80%]sm:w-[40%] sm:min-w-[40%] sm:max-w-[40%]">
        <h1 className="font-medium leading-tight text-5xl mt-8 mb-2 sm:mb-4 text-white text-center">Posts</h1>
        {
          posts.map((post, i) => {
            return (
              <>
                <div className="mb-8 mt-4 sm:mt-0 rounded-lg shadow-sm md:mb-12 cursor-pointer"
                     onClick={() => onPostSelect(i)}>
                  <figure className="flex flex-col p-8 rounded-t-lg rounded-b-lg bg-slate-800
                hover:bg-gray-700
                hover:text-white">
                    <img className="rounded mb-4" src={post.imageUrl} alt="pp"/>
                    <blockquote className="flex flex-col lg:mb-8">
                      <p className="my-4 font-light break-all text-white">{generateContentString(post.content)}</p>
                    </blockquote>
                    <figcaption className="flex items-center sm:justify-between">
                      <div className="flex space-x-1 sm:space-x-5">
                        <img className="rounded-full w-12 h-14" src="/images/osman.png" alt="pp"/>
                        <div className="font-medium dark:text-white">
                          <div className="text-white">{post.user}</div>
                          <div className="text-xs font-light text-gray-400 dark:text-gray-400">user description</div>
                        </div>
                      </div>
                      <div className="text-xs xs:text-md text-right font-light text-gray-400 dark:text-gray-400">
                        {moment(post.lastUpdated).format("DD-MMM-YYYY HH:mm:ss")}
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </>
            );
          })
        }
      </div>
    </div>
  );
}

export default Posts;