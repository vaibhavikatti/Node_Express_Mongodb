// during run time we can modify the properties

const vm  = require('vm')

let user = {
    name: "vaibhavi",
    email:"vaibhavikatti19@gmauil.com",
    mobile:8762742438
}

console.log('before =',user)

vm.createContext(user)
vm.runInContext(`name = "Manoj";email = "manoj@gmail.com"`,user)

console.log("after = ",user)