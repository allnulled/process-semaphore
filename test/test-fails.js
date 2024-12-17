const child_process = require("child_process");

child_process.spawn("node", ["process-without-semaphore.js"], {
  cwd: __dirname,
  stdio: [process.stdin, process.stdout, process.stderr]
});

child_process.spawn("node", ["process-without-semaphore.js"], {
  cwd: __dirname,
  stdio: [process.stdin, process.stdout, process.stderr]
});
