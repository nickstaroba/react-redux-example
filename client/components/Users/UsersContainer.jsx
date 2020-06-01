import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ActionCreators } from "../../ducks/users";
import { Users } from "./Users";

class UsersContainer extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchUsers();
  }

  render() {
    const { actions, comments, posts, users } = this.props;
    return (
      <Users
        comments={comments}
        fetchPosts={actions.fetchPosts}
        posts={posts}
        users={users}
      />
    );
  }
}

UsersContainer.propTypes = {
  actions: PropTypes.shape({
    fetchUsers: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
  posts: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = ({ users }) => users;

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
