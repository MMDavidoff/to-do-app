 import React, { useEffect, useState } from "react";
import Menu from "../components/menu/menu";
import UserSelect from "../components/user-select/userSelect";
import axios from "axios";
import Post from "../components/posts/Post";

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then((response) => {
      setPosts(response.data);
      localStorage.setItem("posts", JSON.stringify(response.data))
    });
  }, []);

  const setUserId = (id) => {
    setPosts([]);
    axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    }).then((response) => {
      setPosts(response.data);
    });
  };
  return (
    <div>
      <Menu />
      <UserSelect setUserId={setUserId} />
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} id={post.id}/>
      ))}
    </div>
  );
};

export default PostPage;
