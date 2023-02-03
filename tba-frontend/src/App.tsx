import React from 'react';
import Posts from './component/Posts';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <Button style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Hello</Button>
      <div className="App">
      <div className="Posts">
        <Posts />
      </div>
    </div>
    </>
  );
}

export default App;
