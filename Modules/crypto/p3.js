const crypto = require ('crypto')

//AES => Advance Encription standard 128 , 192, 256

const input = "be-practical";

//properties
const algo = 'aes-256-cbc'
const key = crypto.randomBytes(32) // key = 32bits
const iv = crypto.randomBytes(16) // iv = initialisation vector 16bits

// encrypt
function encrypt(data){
    //cipher
    let cipher = crypto.createCipheriv(algo,Buffer.from(key),iv)
    let out = cipher.update(data)
    out = Buffer.concat([out,cipher.final()])
    return{
        iv:iv.toString('hex'),
        out:out.toString('hex')
    }
}

let res = encrypt(input)
console.log('encripted output = ',res)

//decrypt
function decrypt(data){
   let iv1 = Buffer.from(data.iv,'hex');
   let out1 = Buffer.from(data.out,'hex')

   let deCipher = crypto.createDecipheriv(algo,Buffer.from(key),iv1)
   let decryptOut = deCipher.update(out1);
   decryptOut = Buffer.concat([decryptOut,deCipher.final()])

   return decryptOut.toString()
}
let res1 = decrypt(res)
console.log('decrypted data = ',res1)