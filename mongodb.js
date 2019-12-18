// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    //database
    const db = client.db(databaseName);

    //collection (i.e., table)
    const usersCollection = db.collection('users');
    usersCollection.insertOne({
      name: 'Ajay'
    });
  }
);
