const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  db.collection('Todos').findOneAndUpdate(
    {
      _id: new ObjectID('5ab236fd1bc0ec45cbdc6683')
    },
    {
      $set: {
        completed: true
      }
    },
    {
      returnOriginal: false
    }
  ).then((result) => console.log(result));

  db.collection('Users').findOneAndUpdate(
    {
      _id: new ObjectID('5ab1149266f111b61b2e45de')
    },
    {
      $set: {
        name: 'Emma',
        location: 'Indonesia'
      },
      $inc: {
        age: 29
      }
    },
    {
      returnOriginal: false
    }
  ).then((result) => console.log(result));

  // db.close();
});
