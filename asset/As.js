const http = require("http");
const fs = require("fs");
//module URL
const { URL } = require("url");
const path = require("path");

const server = http.createServer((req, res) => {
  const myurl = new URL(req.url, `http://${req.headers.host}`, true);

  try {
    const templatesPath = "../templates";
    const files = fs.readdirSync(templatesPath);
    console.log("Files in the directory:", files);

    files.forEach((file) => {
      const fullPath = path.join(templatesPath, file);
      console.log("Full path:", fullPath);
      const product = [fullPath];
    });
  } catch (err) {
    console.log("Error reading directory:", err);
  }

  // if (product === "/" || product === "/home") {
  //   res.end();
  // } else if (product === "/product") {
  //   //TODO:
  //   //product show link and click imags
  //   //สรัางarray
  // } else {
  //   res.writeHead(404);
  //   res.end(`<h1>Error</h1>`);
  // }

  // console.log(`URL: ${product}`);
});

server.listen(8080, () => {
  console.log(` server port:8080 open.`);
});
