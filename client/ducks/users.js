import { generateTypes, makeAction } from "../util";

const TYPES = generateTypes(
  "GET_USERS",
  "SET_USERS",
  "GET_POSTS",
  "SET_POSTS",
  "GET_COMMENTS",
  "SET_COMMENTS"
);

export const Actions = Object.freeze({
  getUsers: () => makeAction(TYPES.GET_USERS),
  setUsers: (users) => makeAction(TYPES.SET_USERS, users),
  getPosts: () => makeAction(TYPES.GET_POSTS),
  setPosts: (posts) => makeAction(TYPES.SET_POSTS, posts),
  getComments: () => makeAction(TYPES.GET_COMMENTS),
  setComments: (comments) => makeAction(TYPES.SET_COMMENTS, comments),
});

const fetchUrl = (url) => {
  return fetch(url).then((response) => response.json());
};

export const ActionCreators = Object.freeze({
  fetchUsers: () => (dispatch) => {
    dispatch(Actions.getUsers());
    fetchUrl("http://localhost:3000/users/").then((users) =>
      dispatch(Actions.setUsers(users))
    );
  },
  fetchPosts: (id) => (dispatch) => {
    dispatch(Actions.getPosts());
    fetchUrl(`http://localhost:3000/users/${id}/posts/`).then((posts) => {
      dispatch(Actions.setPosts(posts));
      dispatch(Actions.getComments());
      fetchUrl(`http://localhost:3000/posts/${posts[0].id}/comments/`).then(
        (comments) => {
          dispatch(Actions.setComments(comments));
        }
      );
    });
  },
});

const initialState = Object.freeze({
  comments: [],
  loading: false,
  posts: [],
  users: [],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_USERS: {
      return {
        ...state,
        loading: true,
      };
    }
    case TYPES.SET_USERS: {
      const users = action.payload;
      return {
        ...state,
        users,
        loading: false,
      };
    }
    case TYPES.GET_POSTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case TYPES.SET_POSTS: {
      const posts = action.payload;
      return {
        ...state,
        posts,
        loading: false,
      };
    }
    case TYPES.GET_COMMENTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case TYPES.SET_COMMENTS: {
      const comments = action.payload;
      return {
        ...state,
        comments,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
