const os = require('node:os') // in Python import node:os
console.log(os.version())
console.log(os.uptime())
console.log(os.freemem())

const fs = require('node:fs')

fs.writeFile('message.txt', "Hallo aus dem File System Modul", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 


  