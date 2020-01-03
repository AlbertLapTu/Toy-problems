const fs = require('fs');
const path = require('path');

fs.readdir(__dirname, (err, items) => {
  for (let i = 0; i < items.length; i++) {
    const fileName = items[i].substring(0, items[i].indexOf('.'));

    if (fileName === 'addFolders') continue;

    fs.mkdir(fileName, (err) => {});
  }
});

// fs.mkdir('hello', (err) => {
//   console.log('hello');
// });
