// chamar a função mdLinks que será executada pela linha de comando.

const mdLinks = require("./index.js");

mdLinks()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

