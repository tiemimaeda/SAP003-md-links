const mdLinks = require("../index.js");

describe("mdLinks", () => {
  test("is a function", (done) => {
    expect(typeof mdLinks).toBe("function");
    done();
  });

  test("links and title", (done) => {
    mdLinks("./lib/__tests__/Test.md")
      .then(result => {
        expect(result).toEqual([
          {title: "Markdown", href: "https://pt.wikipedia.org/wiki/Markdown" },
          {title: "Node.js", href: "https://nodejs.org/"}, 
          {title: "Chrome", href: "https://developers.google.com/v8/"},
        ]);
        done();
      });
  });

  test("should be an error", (done) => {
    mdLinks("./lib/__tests__/Tst.md")
      .catch(err => {
        expect(err).toEqual("ENOENT: no such file or directory, open './lib/__tests__/Tst.md'");
        done();
      });
  });
});