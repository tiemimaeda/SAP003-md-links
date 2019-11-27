// criação e exportação da função mdLinks.

const fs = require("fs");
const file = "README.md";
const arr = [];

mdLinks = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(err.message);
      } else {
        const regex = data.match(/\[(\S.*)\]\((http.*\)?)/gm);
        regex.forEach((index) => {
          const title = index.match(/\[(\S.*)\]/)[1];
          const href = index.match(/\((http.*)\)/)[1];
          arr.push({ title, href });
        });
        resolve(arr);
        // console.log(arr);
      }
    });
  });
};

mdLinks();

module.exports = mdLinks;