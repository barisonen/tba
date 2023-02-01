import React, { useEffect } from "react";
import { useState } from "react";
import { getPosts } from "../service/PostsService";
import Card from 'react-bootstrap/Card';
import './Posts.css';

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

  return (
    <>
      {
        posts.map((post) => {
          return (
            <>
              <Card className="text-center">
                <Card.Header>{post.user}</Card.Header>
                <Card.Body>
                  <Card.Title>{post.header}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
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