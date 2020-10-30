import React from "react";
import "./styles.css";
import PostList from "./PostList/PostList";
import Tabs from './PostList/Tabs';
import Nav from './PostList/Nav';

export default function App() {
  return (
    <div className="App">
          <Nav/><br/><br/><br/><br/><br/><br/>
           <Tabs/>
    </div>
  );
}
