import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "./JS/action/action";
import { Link } from "react-router-dom";

const UserList = ({ user, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { fetchUser })(UserList);
