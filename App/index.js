var MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/learning_mongo";

var findDocuments = (db, callback) =>  {
    var collection = db.collection('tours');

    collection.find({"tourPackage": "Snowboard Cali"}).toArray( (err, docs) => {
        console.log(docs);
        callback;
    });
    return;
}

MongoClient.connect(url, (err, db) => {
    console.log('Successfully connected to Server');
    
    findDocuments(db.db(), function(){
        db.close(true);
    });
});

