
const buf1 = Buffer.alloc(10);

const buf2 = Buffer.alloc(10, 1);

const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1, 2, 3]);
const buf5 = Buffer.from('tést');

const buf = Buffer.from('hello world', 'ascii');

console.log(buf);

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

console.log(buf.toString('binary'));
