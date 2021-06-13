//worker.js
const {parentPort} = require("worker_threads");

// parentPort allowing communication with the parent thread
// parentPort.on("message", data => {
//   parentPort.postMessage({num: data.num, fib: getFib(data.num)});
// });

// For Shared Memory

parentPort.on("message", data => {
  data.nums.forEach(num => {
    parentPort.postMessage({num: num, fib: getFib(num)});
  });
})

function getFib(num) {
  if (num === 0) {
    return 0;
  }
  else if (num === 1) {
    return 1;
  }
  else {
    return getFib(num - 1) + getFib(num - 2);
  }
}