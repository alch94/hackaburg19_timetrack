var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:example@localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});
