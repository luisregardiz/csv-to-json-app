const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const server = express();

server.use(cors());
server.use(routes);

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = server;
