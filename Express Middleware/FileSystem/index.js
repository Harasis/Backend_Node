const fs = require("fs");

const content = "Hello from node js";

fs.writeFile("test.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("file written successfully");
  }
});

fs.readFile("test.txt", "utf-8", function (err, buf) {
  console.log(buf);
});
