const fs = require('fs')

//async append
const data = "\n\n Asyncronously append data to a file,creating the file if it does not exist"

fs.appendFile('./documents/test1.txt',data,function(err){
    if(err)throw err;
    console.log('Append successfull')
})