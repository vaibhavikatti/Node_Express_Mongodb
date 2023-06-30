const {client} = require('./dbconnect')
const dbName = "userdb"

async function main(){
    try{
        await client.connect()
        console.log('mongodb connected')
        const db = client.db(dbName)
        const collection = db.collection('users')
        const finResp = await collection.deleteOne({email:"rama@gmail.com"}) /* findOne() - read single  users data n return it in the same format as in database */
        console.log(`delete success = `,finResp)
    }finally{
        await client.close()
    }
}

main().catch(err => console.log(err.message))