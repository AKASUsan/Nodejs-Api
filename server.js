const http = require("http");
const fs = require("fs");
//module URL
const { URL } = require("url");

const server = http.createServer((req, res) => {
  const myurl = new URL(req.url, `http://${req.headers.host}`, true);
  const product = myurl.pathname;

  try {
    const templatesPath = "../templates";
    const files = fs.readdirSync(templatesPath);
    console.log("Files in the directory:", files);

    files.forEach((file) => {
      const p = path.join(templatesPath, file);
      const id = [1, 2, 3];
      fs.readFile(p, "utf8", (err, data) => {
        // if (err) throw err;
        // const RouteApi = {
        //   "/": () => res.end(data),
        //   [`/product?=${id}`]: () => res.end(data),
        // };

        // const api = RouteApi[product];
        // if (api) {
        //   api();
        // }
        if (product === "/") {
          res.writeHead(200, { "content-type": "text/html" });
          res.end(data);
        } else if (product === `/product`) {
          res.end(data);
        } else {
          res.end(err);
        }
      });
      // if (product === "/" || product === "/home") {
      //   res.end();
      // } else if (product === `/product?=${id}`) {
      //   //TODO:
      //   //product show link and click imags
      //   //สรัางarray
      // } else {
      //   res.writeHead(404);
      //   res.end(`<h1>Error</h1>`);
      // }
    });
  } catch (err) {
    console.log("Error reading directory:", err);
  }
  // console.log(`URL: ${product}`);
});

server.listen(8080, () => {
  console.log(` server port: 8080 open.`);
});
