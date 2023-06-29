const fs = require('fs')
const readLine = require('readline')

//readline
const txt = readLine.createInterface({
    input:fs.createReadStream('./documents/myfile.txt')
})

var li = 0;
txt.on('line',function(data){
    li++;
    console.log(`line number = ${li} : ${data}`)
});