import PropTypes from "prop-types";
import React from "react";

export const UserList = ({ comments, fetchPosts, users, posts }) => {
    const handleUserClick = (id) => () => {
        fetchPosts(id);
    };

    return (
        <>
            <h1>Users:</h1>
            <ul>
                {users.map(({ id, name }) => {
                    return (
                        <li key={name} onClick={handleUserClick(id)}>
                            {name}
                        </li>
                    );
                })}
            </ul>
            <h2>Posts:</h2>
            <ul>
                {posts.map(({ title }) => {
                    return <li key={title}>{title}</li>;
                })}
            </ul>
            <h3>First Post Comments:</h3>
            <ul>
                {comments.map(({ body }) => {
                    return <li key={body}>{body}</li>;
                })}
            </ul>
        </>
    );
};

UserList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    users: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default UserList;
