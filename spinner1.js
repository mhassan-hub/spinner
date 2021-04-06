process.stdout.write('hello from spinner1.js... \rheyyy\n');


setTimeout(() => {
  process.stdout.write('\r|   ');
}, 200);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 800);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1100);
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1400);

// ... fill in the rest yourself ...