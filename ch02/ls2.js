var fs = require('fs');
var dir = '.';
if (process.argv[2]) {
  dir = process.argv[2];
  console.log(`process.argv[2] = ${dir}`);
}  
var files = fs.readdirSync('.');
for (fn in files) {
  console.log(files[fn]);
}