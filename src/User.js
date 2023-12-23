import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost } from "./JS/action/action";
import { Link } from "react-router-dom";
const User = ({ user, fetchPost, post, match }) => {
  userId = match.params.userId;
  useEffect(() => {
    fetchPost(userId);
  }, [fetchPost, userId]);
  return (
    <div>
      <h1>{user.name}'s post</h1>
      <ul>
        {post.map((post) => (
          <li>
            <Link to={`/post/${post.id}`}> {post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  return {
    user: state.users.find((user) => user.id === Number(userId)),
    post: state.post.filter((post) => post.userId === Number(userId)),
  };
};
export default connect(mapStateToProps, { fetchPost })(User);
