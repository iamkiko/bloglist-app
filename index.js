const app = require("./app"); // the actual Express app
const http = require("http");
const config = require("./utils/config");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const server = http.createServer(app);
const PORT = process.env.PORT || config.PORT;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
