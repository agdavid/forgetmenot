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

    // //collection (i.e., table)
    // const usersCollection = db.collection('users');
    // // method insertOne
    // usersCollection.insertOne(
    //   {
    //     name: 'David'
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log(`Error: ${error}`);
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // // method insertMany
    // const users = [
    //   { name: 'Jen', age: 28 },
    //   { name: 'Gunther', age: 27 }
    // ];
    // usersCollection.insertMany(users, (error, result) => {
    //   if (error) {
    //     return console.log(`Error: ${error}`);
    //   }
    //   console.log(result.ops);
    // });

    // // method insertMany with new collection
    // const tasksCollection = db.collection('tasks');

    // const tasks = [
    //   { description: 'Get groceries', completed: true },
    //   { description: 'Go to yoga', completed: false }
    // ];
    // tasksCollection.insertMany(tasks, (error, result) => {
    //   if (error) {
    //     console.log(`Error: ${error}`);
    //   }
    //   console.log(result.ops);
    // });
  }
);
