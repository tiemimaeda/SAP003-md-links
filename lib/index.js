// criação e exportação da função mdLinks.

const fs = require("fs");

const mdLinks = (file) => {
  const links = /\[(\S.*)\]\((http.*?\))/gm;
  const arr = [];
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(`Could not open file: ${err}`);
      } else {
        const regex = data.match(links);
        regex.forEach((index) => {
          const title = index.match(/\[(\S.*)\]/)[1];
          const href = index.match(/\((http.*)\)/)[1];
          arr.push({ title, href });
        });
        resolve(arr);
      }
    });
  });
};

module.exports = mdLinks;