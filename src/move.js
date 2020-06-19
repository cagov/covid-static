const fs = require('fs')
// get the list of files from
console.log('hello')
let fileContents = fs.readFileSync('../data/files.json');
console.log(fileContents)
/*
  cat $HOME/files.json
  cat $HOME/files_modified.json
  cat $HOME/files_added.json
  cat $HOME/files_removed.json
  echo '${{ steps.file_changes.outputs.files}}'
  echo '${{ steps.file_changes.outputs.files_modified}}'
  echo '${{ steps.file_changes.outputs.files_added}}'
  echo '${{ steps.file_changes.outputs.files_removed}}'
*/
console.log('bye')
// move them to: - run: cp ./pdf/* path/to/artifact/