const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.write("<html>");
  res.write("<head><title>Code Eating Ant</title></head>");
  res.write("<body>");
  res.write("<h1>Hello, World!</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

app.listen(5000);
