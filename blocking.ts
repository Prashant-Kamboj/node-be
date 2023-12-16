// const fs = require("fs");
import fs from "fs/promises";
import path from "path";
// const fs = require("fs/promises");
// const path = require("path");
// const result = fs.readFileSync(path.join(__dirname, "package.json"), "utf-8");
const read = async () => {
  const result = fs.readFile(path.join(__dirname, "package.json"), "utf-8");
  return result;
};

// example of non blocker code use async this will not block the code as it will return promise that will be resolved later
read().then((response) => console.log(response));
console.log("hi");
