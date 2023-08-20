// test file for handling async error add this code in the index file

setTimeout(() => {
  throw new Error("oops");
}, 300);

process.on("uncaughtException", () => {});

process.on("unhandledRejection", () => {});
