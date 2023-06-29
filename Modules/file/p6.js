const fs = require('fs')

//async append
const data = "\n\n Asyncronously append data to a file,creating the file if it does not exist"

fs.appendFileSync('./documents/test2.txt',data)
console.log('Async append successfull')