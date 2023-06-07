const fs = require("fs");
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("Error: " + err);
  } else {
    console.log("Success!");
  }
});
fs.readFile("welcome.txt", (err, data) => {
  if (err) {
    console.error("Error: " + err);
  } else {
    console.log("Content: " + data);
  }
});
