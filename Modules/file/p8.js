const fs = require('fs')

//sync unlink

fs.unlinkSync('./documents/test2.txt')
console.log('file is deeleted successfully using sync')