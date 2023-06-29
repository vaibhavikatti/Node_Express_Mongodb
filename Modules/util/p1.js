const util = require('util')

// template
let myTemplate = `Hi,%s,welcome to %s and duration of the course is %d months `

let u1 = util.format(myTemplate,'vaibhavi','node.js',1.4)
let u2 = util.format(myTemplate,'shrivatsa','react.js',1.2)

console.log('user1',u1)
console.log('user2',u2)