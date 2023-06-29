const fs = require('fs')

const data = 'All file system operation have asymcronous ,callback,and propmise based forms,and are accessible usoing both commonJs syntax and Es6 Modules(Esm)';

//async write
fs.writeFile('./documents/test1.txt',data,function(err){
    if(err)throw err;
    console.log('async file write completed')
})