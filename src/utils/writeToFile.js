const fs = require("fs");
const path = require("path");

const writeToFile = (fileName, html) => {
  const filePath = path.join(__dirname, `../../dist/${fileName}.html`);
  console.log(filePath);

  fs.writeFileSync(filePath, html);
};

module.exports = writeToFile;

