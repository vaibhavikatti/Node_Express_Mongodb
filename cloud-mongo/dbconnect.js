const { MongoClient,ServerApiVersion } = require('mongodb')

const uri = "mongodb+srv://Vaibhavikatti1:Shrivai@cluster0.giyoaek.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri,{
    serverApi:{
        version:ServerApiVersion.v1,
        deprecationErrors:true,
        strict:true
    }
})

module.exports = { client }

// async function main(){
//     try{
//         await client.connect()
//         console.log(`mongodb connected`)
//     }finally{
//         await client.close()
//     }
// }

// main().catch(err => console.log(err.message))
