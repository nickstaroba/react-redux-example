import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { UserList } from "./UserList";
import { ActionCreators } from "./UserListDuck";

class UserListContainer extends Component {
    componentDidMount() {
        const { actions } = this.props;
        actions.fetchUsers();
    }

    render() {
        const { actions, comments, posts, users } = this.props;
        return (
            <UserList
                comments={comments}
                fetchPosts={actions.fetchPosts}
                posts={posts}
                users={users}
            />
        );
    }
}

UserListContainer.propTypes = {
    actions: PropTypes.shape({
        fetchUsers: PropTypes.func.isRequired,
        fetchPosts: PropTypes.func.isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(PropTypes.object),
    posts: PropTypes.arrayOf(PropTypes.object),
    users: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = ({ accounts }) => accounts;

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
