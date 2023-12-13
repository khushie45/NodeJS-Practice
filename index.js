// how to create a server

import http from "http";
import fs from "fs";

const PORT = process.env.PORT;
const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end("<h1>About Page</h1>");
  }
  if (req.url === "/contact") {
    return res.end("<h1>Contact Page</h1>");
  } else {
    return res.end("<h1>404 Page not found</h1>");
  }
});

server.listen(PORT, () => {
  console.log("Server is working!");
});
