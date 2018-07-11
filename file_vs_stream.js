const fs = require('fs');

const cols = 8;

function randomChar () {
  return String.fromCharCode(Math.floor(Math.random() * (122-65) + 65));
}

function randomString (length) {
  let string = '';
  for (let i = 0; i < length; i++) {
    string += randomChar();
  }
  return string;
}

function randomRow () {
  const cells = [];
  for (let i = 0; i < cols; i++) {
    cells.push(randomString(20));
  }
  return cells.join(',') + '\n';
}

async function writeRow (stream) {
  return new Promise((resolve, reject) => {
    stream.write(randomRow(), 'utf8', () => resolve());
  });
}

async function createCSVs (sizes) {
  sizes.forEach(async size => {
    const stream = fs.createWriteStream(`dummy${size}.csv`);
    for (let i = 0; i < size; i++) {
      await writeRow(stream);
    }
    stream.end();
  });
}

createCSVs([1000, 10000, 100000, 1000000]);




//




const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

async function read1 (file) {
  const label = `read1-${file}`;
  console.time(label);
  const data = await readFile(file, 'utf8');
  const header = data.split(/\n/)[0];
  console.timeEnd(label);
}

async function read2 (file) {
  return new Promise(resolve => {
    let header;
    const label = `read2-${file}`;
    console.time(label);
    const stream = fs.createReadStream(file, {encoding: 'utf8'});
    stream.on('data', data => {
      header = data.split(/\n/)[0];
      stream.destroy();
    });
    stream.on('close', () => {
      console.timeEnd(label);
      resolve();
    });
  });
}

async function startTests(files) {
  for (let file of files) {
    console.log(file);
    await read1(file);
    await read2(file);
  }
}

readdir(__dirname).then(files => {
  startTests(files.filter(file => /dummy\d+\.csv/.test(file)));
});