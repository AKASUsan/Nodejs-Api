const http = require("http");

const fs = require("fs");

const port = 8080;

const homepage = fs.readFileSync(
  `${__dirname}/../templates/index.html`,
  "utf-8"
);

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/" || url === "/home") {
    res.end(homepage);
  } else if (url === "/product?id=1" || url === "/product/purse") {
    res.end(
      fs.readFileSync(`${__dirname}/../templates/product1.html`, "utf-8")
    );
  } else if (url === "/product?id=2" || url === "/product/hat") {
    res.end(
      fs.readFileSync(`${__dirname}/../templates/product2.html`, "utf-8")
    );
  } else if (url === "/product?id=3" || url === "/product/shoe") {
    res.end(
      fs.readFileSync(`${__dirname}/../templates/product3.html`, "utf-8")
    );
  } else {
    res.writeHead(404);
    res.end(`<h1>error 404</h1>`);
  }

  console.log(`URL: ${url}`);
});

server.listen(port, () => {
  console.log(`Server ${port}`);
});
