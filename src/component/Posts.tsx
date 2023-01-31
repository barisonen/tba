import React, { useEffect } from "react";
import { useState } from "react";
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
        // get data from backend

        const newPosts: Post[] = [];
        newPosts.push({ user: "Baris", header: "Hi!", content: "This is my first post", date: new Date() });
        newPosts.push({ user: "Baris", header: "Sup", content: "I'm old now, sup newbies", date: new Date() });
    
        setPosts([ ...posts, ...newPosts ]);
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