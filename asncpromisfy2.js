// import {readFile} from 'fs'
const { readFile, writeFile } = require("fs");
const util = require("util");

const readpromisify = util.promisify(readFile);
const writepromisify = util.promisify(writeFile);

const Try = async () => {
  try {
    const first = await readpromisify("./sth/tt.txt", "utf8");
    const second = await writepromisify(
      "./sth/second.txt",
      `hello there ${first}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
Try();
