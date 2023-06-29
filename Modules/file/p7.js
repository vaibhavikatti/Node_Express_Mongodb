
const fs = require('fs')

//async unlink

fs.unlink('./documents/test1.txt',function(err){
    if(err)throw err;
    console.log('File is deleted successfully')
})