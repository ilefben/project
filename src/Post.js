import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComment } from "./JS/action/action";
import { Link } from "react-router-dom";
const Post = ({ fetchComment, post, comments, match }) => {
  const postId = match.params.postId;
  useEffect(() => {
    fetchComment(postId);
  }, [fetchComment, postId]);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  return {
    post: state.posts.find((post) => post.id === Number(postId)),
    comments: state.comments.filter(
      (comment) => comment.postId === Number(postId)
    ),
  };
};
export default connect(mapStateToProps, { fetchComment })(Post);
