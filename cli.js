#!/usr/bin/env node

const mdLinks = require("./lib/index.js");
// const file = "README.md";
const file = process.argv[2];

mdLinks(file)
  .then((result) => {
    result.forEach(el => {
      console.log(el.title, el.href);
    });
  })
  .catch((resolve) => console.log(resolve));