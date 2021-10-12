const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'plumgen-data'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {

    if(error){
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)
    db.collection('login').deleteOne({
        description: "Clean the House"
       }).then((result) => {
           console.log(result)
       }).catch((error) => {
           console.log(error)
       })
})