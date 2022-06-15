const fs = require("fs");
const path = require("path");
const renderHTML = require("./renderHTML");

const writeToFile = (fileName, renderHTML) => {
  const filePath = path.join(__dirname, `../../dist/${fileName}.html`);
  console.log(filePath);

  fs.writeFileSync(filePath, JSON.stringify(renderHTML));
};

module.exports = writeToFile;

// pass by reference
// pass by value
