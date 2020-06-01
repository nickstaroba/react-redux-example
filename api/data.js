const lorem = require("./lorem");

const word = () => lorem.generateWords(1);
const sentence = () => lorem.generateSentences(2);

module.exports = {
  orders: [
    { id: 1, name: `order ${word()}`, status: "failed" },
    { id: 2, name: `order ${word()}`, status: "complete" },
    { id: 3, name: `order ${word()}`, status: "failed" },
    { id: 4, name: `order ${word()}`, status: "running" },
    { id: 5, name: `order ${word()}`, status: "complete" },
  ],
  tasks: [
    { id: 1, name: `task ${word()}`, orderId: 1, userId: 1 },
    { id: 1, name: `task ${word()}`, orderId: 1, userId: 2 },
    { id: 2, name: `task ${word()}`, orderId: 2, userId: 2 },
    { id: 3, name: `task ${word()}`, orderId: 3, userId: 3 },
    { id: 3, name: `task ${word()}`, orderId: 3, userId: 4 },
    { id: 4, name: `task ${word()}`, orderId: 4, userId: 4 },
    { id: 5, name: `task ${word()}`, orderId: 5, userId: 4 },
    { id: 5, name: `task ${word()}`, orderId: 5, userId: 5 },
  ],
  posts: [
    { id: 1, title: `post ${word()}`, userId: 1 },
    { id: 2, title: `post ${word()}`, userId: 2 },
    { id: 3, title: `post ${word()}`, userId: 3 },
    { id: 4, title: `post ${word()}`, userId: 4 },
    { id: 5, title: `post ${word()}`, userId: 5 },
  ],
  comments: [
    { id: 1, body: `comment ${sentence()}`, postId: 1, userId: 1 },
    { id: 1, body: `comment ${sentence()}`, postId: 1, userId: 2 },
    { id: 2, body: `comment ${sentence()}`, postId: 2, userId: 2 },
    { id: 3, body: `comment ${sentence()}`, postId: 3, userId: 3 },
    { id: 3, body: `comment ${sentence()}`, postId: 3, userId: 4 },
    { id: 4, body: `comment ${sentence()}`, postId: 4, userId: 4 },
    { id: 5, body: `comment ${sentence()}`, postId: 5, userId: 4 },
    { id: 5, body: `comment ${sentence()}`, postId: 5, userId: 5 },
  ],
  users: [
    { id: 1, name: `user ${word()}` },
    { id: 2, name: `user ${word()}` },
    { id: 3, name: `user ${word()}` },
    { id: 4, name: `user ${word()}` },
    { id: 5, name: `user ${word()}` },
  ],
};
