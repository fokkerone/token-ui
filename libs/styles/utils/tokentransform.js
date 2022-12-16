const fs = require('fs');
const path = require('path');
var cmd = require('node-cmd');

const filesDir = path.join(__dirname, '../figmatokens');

console.log(filesDir);

let TokenFiles = fs.readdirSync(filesDir);

TokenFiles = TokenFiles.filter((name) => name.includes('.json'));

console.log('sdsd', path.join(__dirname, '../figmatokens/', 'Button.json'));

TokenFiles.forEach((json) => {
  console.log('#####################');
  console.log(json);

  let pppp = path.join(__dirname, '../figmatokens/', json);
  let out = path.join(__dirname, '../figmatokens/out', json);
  const syncClone = cmd.runSync(`npx token-transformer ${pppp} ${out}`);

  console.log(syncClone);
});
