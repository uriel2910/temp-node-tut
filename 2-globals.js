// GLOBALS - NO WINDOWS!!!

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJs)
// module       - info about current module (file)
// process      - info about env where the program is beign executed

console.log(__dirname);

const intervalTest = setInterval(() => {
  console.log("This is an Interval");
}, 1000);

setTimeout(() => {
  clearInterval(intervalTest);
}, 6000);
