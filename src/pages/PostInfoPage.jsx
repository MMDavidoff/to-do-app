import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Menu from "../components/menu/menu";
import PostInfo from "../components/post/PostInfo";
import axios from "axios";
import Comment from "../components/post-comments/Comment";

const PostInfoPage = () => {
  const [comments, setComments] = useState([]);
  //const [post, setPost] = useState([]),

  let { id } = useParams();
  const storagePost = localStorage.getItem("posts");
  const post = JSON.parse(storagePost).find((p) => p.id == id);
  console.log(post);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
    }).then((response) => {
      setComments(response.data);
    });
  });

  return (
    <div>
      <Menu />
      <PostInfo post={post} />
      <h3>Comments:</h3>
      {comments.map((comment) => (
        <Comment  key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default PostInfoPage;
