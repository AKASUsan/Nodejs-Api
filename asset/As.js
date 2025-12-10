const http = require("http");
const fs = require("fs");
// module URL
const { URL } = require("url");

const path = fs.readFileSync(`${__dirname}/../templates/index.html`, "utf-8");
const server = http.createServer((req, res) => {
  const myurl = new URL(req.url, `http://${req.headers.host}`, true);
  const product = myurl.pathname;
  if (product === "/" || product === "/home") {
    res.end(path);
  } else if (product === "/product?=id?") {
    //TODO:
    //product show button and click imags
    //select all file
    //open file
  } else {
    res.writeHead(404);
    res.end(`<h1>Error</h1>`);
  }

  console.log(`URL: ${product}`);
});

server.listen(8080, () => {
  console.log(` server port:8080 open.`);
});
