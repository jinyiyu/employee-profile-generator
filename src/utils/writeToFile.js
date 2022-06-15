const fs = require("fs");
const path = require("path");

const writeToFile = (fileName, renderHTML) => {
  const filePath = path.join(__dirname, `../../dist/${fileName}.html`);

  fs.readFileSync(filePath, renderHTML);
};

module.exports = writeToFile;
