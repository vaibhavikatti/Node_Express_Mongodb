const fs = require('fs')

const data = 'All file system operation have asymcronous ,callback,and propmise based forms,and are accessible usoing both commonJs syntax and Es6 Modules(Esm)';

//async write
fs.writeFileSync('./documents/test2.txt',data)
console.log('sync file write completed')