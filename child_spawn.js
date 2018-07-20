const { spawn } = require('child_process');
const child = spawn('pwd');


child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});
