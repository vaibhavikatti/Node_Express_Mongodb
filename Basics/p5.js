//assert module (package) -> exception (Run time errors) handling

const assert = require('assert')

//assert(10>12)

 const x = [
{
    name:"Raju"
}
];
const y = {
    name : "raju"
};

const z = [
    {
        name : "Raju"
    }
];

//assert.deepStrictEqual(x ,y);
assert.deepStrictEqual(x ,z); // here because its right it ll just execute next line of code
assert.deepStrictEqual(z ,y);

//assert.notDeepStrictEqual(x ,z);
//assert.notDeepStrictEqual(y ,z);
//assert.notDeepStrictEqual(x ,y);
