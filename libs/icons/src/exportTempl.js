const testFolder = '/icons';
const fs = require('fs');

let output = [];
fs.readdir(__dirname + testFolder, (err, files) => {
  files.forEach((file) => {
    let name = file.split('.ts')[0];
    output.push(name);
    //console.log(`export {default as ${name}} from './lib/com/${name}';`);
  });

  fs.writeFile(`${__dirname}/index.ts`, returnOutput(output), (err) => {
    if (err) {
      console.error(err);
    }

    // file written successfully
  });

  fs.writeFile(`${__dirname}/index.md`, returnStory(output), (err) => {
    if (err) {
      console.error(err);
    }

    // file written successfully
  });
});

const returnOutput = (output) => {
  let r = '//All Icons\n';
  output.map(
    (iconname) =>
      (r += `export {default as ${iconname}} from './icons/${iconname}';\n`)
  );

  return r;
};

const returnStory = (output) => {
  let r = '\n';
  output.map(
    (iconname) =>
      (r += `<div className="icobox"><Icon.${iconname}/><span>${iconname}</span></div>`)
  );

  return r;
};

//console.log(returnOutput(output));
