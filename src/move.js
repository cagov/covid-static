const fs = require('fs');
const path = require('path');
// get the list of files from
let fileContents = JSON.parse(fs.readFileSync(`${process.env.HOMEDIR}/files.json`,'utf8'));

fileContents.forEach(file => {
  if(file.indexOf('pdf/') === 0 || file.indexOf('img/') === 0 || file.indexOf('data/') === 0) {
    if(fs.existsSync(file)) {
      fs.mkdirSync(path.dirname('path/to/artifact/'+file), { recursive: true });
      fs.createReadStream(file).pipe(fs.createWriteStream('path/to/artifact/'+file));
    }
  }
})