# Projeto Markdown Links
 

**Esta biblioteca faz a leitura e analisa arquivos em formato Markdown (.md) para verificar se contém links.**
  
Com esta biblioteca, obtemos as seguintes informações:
- `title`: Nome do link.
- `href`: URL encontrada.

## [](https://github.com/tiemimaeda/SAP003-md-links-#como-instalar)Como instalar:

No terminal, digite o comando abaixo:

```
$ npm install tiemimaeda/SAP003-md-links
```
  
## [](https://github.com/tiemimaeda/SAP003-md-links-#como-utilizar)Como utilizar:

### JavaScript API

O módulo pode ser importado em outros scripts Node.js da seguinte forma:

```js
const mdLinks = require("md-links");

mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })
  .catch(console.error);
```

### CLI (Command Line Interface) 
Esta biblioteca pode ser executada no terminal da seguinte maneira:

```
md-links <path-to-file> [option]
```

Exemplo do comando a ser executado no terminal:
```
$ md-links ./some/example.md
```



Exemplo de retorno válido:
```
Markdown https://pt.wikipedia.org/wiki/Markdown
Node.js https://nodejs.org/
Chrome https://developers.google.com/v8/
```

Exemplo de retorno inválido:
```
ENOENT: no such file or directory, open <file>
```