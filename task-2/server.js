const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("<h1>Hello Node!!!!</h1>\n");
  })
  .listen(3000);
console.log("Server running at http://127.0.0.1:3000/");
