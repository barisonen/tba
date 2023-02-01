import React, { useEffect } from "react";
import { useState } from "react";
import { getPosts } from "../service/PostsService";
import { Card } from "react-bootstrap";
import './Posts.css';

interface Post {
  user: string;
  header: string;
  content: string;
  date: Date
}

const Posts: React.FC = (): JSX.Element => {

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
      return content.substring(0, 27) + "...";
      
    } else return content;
  }

  return (
    <>
      {
        posts.map((post, i) => {
          return (
            <>
              <Card className="card text-white bg-dark mb-3" onClick={() => onPostSelect(i)} style={{ cursor: "pointer" }}>
                <Card.Header>{post.user}</Card.Header>
                <Card.Body>
                  <Card.Title>{post.header}</Card.Title>
                  <Card.Text>
                    {generateContentString(post.content)}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{post.date.toLocaleString()}</Card.Footer>
              </Card>
              <div className="break"></div>
            </>
          );
        })
      }
    </>
  );
}

export default Posts;