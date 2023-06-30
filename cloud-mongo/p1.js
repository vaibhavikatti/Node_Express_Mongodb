const { client } = require("./dbconnect")
const dbName = "userdb"

let data = [
    {
        name:"david",
        email:"david@gmail.com"
    },
    {
        name:"suman",
        email:"suman@gmail.com"
    },
    {
        name:"shaalu",
        email:"shaalu@gmail.com"
    }
]

 async function main(){
     try{
         await client.connect()
         console.log(`mongodb connected`)
         const db = client.db(dbName)
         const collection = db.collection('users')
         const insResp = await collection.insertMany(data)
         console.log(`users data inserted successfully`) 
     }finally{
         await client.close()
     }
 }


 main().catch(err => console.log(err.message))