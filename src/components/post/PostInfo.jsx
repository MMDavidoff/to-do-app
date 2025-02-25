import React from 'react';
import classes from "./PostInfo.module.css"
import PostAuthor from '../post-author/PostAuthor';

const PostInfo = ({post}) => {
  return (
    <div className={classes.titlePost}>
      <h1>Post {post.id}</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <PostAuthor id={post.userId}/>

    </div>
  );
}

export default PostInfo;
