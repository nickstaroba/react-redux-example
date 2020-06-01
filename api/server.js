const jsonServer = require("json-server");
const json = require("./data");

const server = jsonServer.create();
const port = 3000;

const router = jsonServer.router(json);
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);
server.listen(3000, () => {
  console.info(`Listening: http://localhost:${port}/`);
});
