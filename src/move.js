const fs = require('fs');
const path = require('path');
// get the list of files from
let fileContents = JSON.parse(fs.readFileSync(`${process.env.HOMEDIR}/files.json`,'utf8'));

// - run: cp ./pdf/19-11069-Natomas-LLC.pdf path/to/artifact/
fileContents.forEach(file => {
  if(file.indexOf('pdf/') === 0 || file.indexOf('img/') === 0 ) {
    if(fs.existsSync(file)) {
      ensureDirectoryExistence(file);
      fs.createReadStream(file).pipe(fs.createWriteStream('path/to/artifact/'+file));
    }
  }
})

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}