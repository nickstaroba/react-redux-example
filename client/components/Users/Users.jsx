import "./Users.scss";

import PropTypes from "prop-types";
import React from "react";

export const COMPONENT_NAME = "Users";

export const Users = ({ comments, fetchPosts, users, posts }) => {
  const handleUserClick = (id) => () => {
    fetchPosts(id);
  };

  return (
    <div className={COMPONENT_NAME}>
      <h1>Users</h1>
      <ul>
        {users.map(({ id, name }) => {
          return (
            <li
              className={`${COMPONENT_NAME}__button`}
              key={name}
              onClick={handleUserClick(id)}
            >
              {name}
            </li>
          );
        })}
      </ul>
      {posts.length > 0 && (
        <>
          <h2>Posts</h2>
          <ul>
            {posts.map(({ title }) => {
              return (
                <li className={`${COMPONENT_NAME}__record`} key={title}>
                  {title}
                </li>
              );
            })}
          </ul>
        </>
      )}
      {comments.length > 0 && (
        <>
          <h3>Comments</h3>
          <ul>
            {comments.map(({ body }) => {
              return (
                <li className={`${COMPONENT_NAME}__record`} key={body}>
                  {body}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

Users.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  users: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
