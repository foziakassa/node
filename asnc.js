const { readFile, writeFile } = require("fs");
readFile("./sth/tt.txt", "utf8", (err, result) => {
  if (err) {
    return;
  }
  // return result
  console.log(result);
  const read = result;

writeFile(
  "./sth/tt.txt",
  `the new read :${read}`,
  { flag: "a" },
  (err, result) => {
    if (err) {
      return;
    }
    console.log(result);
  }
);
const write = result;
})
