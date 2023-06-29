// allocate memory

const buf = Buffer.alloc(4)
console.log("safe memory =",buf);

//unsafe memory
const buf1 = Buffer.allocUnsafe(5)
console.log("unsafe memory",buf1) //posible to have garbage values

//ASCII value
const buf2 = Buffer.from('RajKumar')
console.log("ASCII = ",buf2)

// ASCII to string
console.log("string =", buf2.toString())

//concat
let a1 = Buffer.from("welcome to")
let a2 = Buffer.from('nodejs server script')

let res = [a1 ,a2]

let out = Buffer.concat(res)
console.log("out =",out)
console.log("out string =",out.toString())