const http = require("http");
const fs = require("fs");

const { URL } = require("url");
const path = require("path");

const server = http.createServer((req, res) => {
  const myurl = new URL(req.url, `http://${req.headers.host}`, true);
  const product = myurl.pathname;
  const templatesPath = path.join(__dirname, "templates");

  const file = {
    "/": "index.html",
    "/home": "idex.html",

    "/product/id=1": "product1.html",
    "/product/1": "product1.html",

    "/product/id=2": "product2.html",
    "/product/2": "product2.html",

    "/product/id=3": "product3.html",
    "/product/3": "product3.html",
  };
  const filename = file[product];
  if (filename) {
    fs.readFile(path.join(templatesPath, filename), "utf8", (err, data) => {
      if (err) {
        res.writeHead(404, { "content-type": "text/html" });
        return res.end("<h1>File Not Found err</h1>");
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end('<h1 style="color:red">404 Page Not Found file</h1>');
  }

  console.log(`URL: ${product}`);
});

server.listen(8080, () => {
  console.log(` server port: 8080 open.`);
});
