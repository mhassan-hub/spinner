let spinnerSym = ['|', '/', '-', '\\', '|'];
let x = 200;
spinnerSym.forEach(element => {
  setTimeout(() => {
  process.stdout.write('\r' + element + "   ");
  }, x);
  x += 200
});
