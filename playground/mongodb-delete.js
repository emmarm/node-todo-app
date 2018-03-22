const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  db.collection('Todos').deleteMany({ text: 'Buy board games' })
    .then((result) => console.log(result));

  db.collection('Todos').deleteOne({ text: 'Make sauerkraut' })
    .then((result) => console.log(result));

  db.collection('Todos').findOneAndDelete({ completed: true })
    .then((result) => console.log(result));

  db.collection('Users').deleteMany({ name: 'Emma' })
    .then((result) => console.log(result));

  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5ab1148866f111b61b2e45da') })
    .then((result) => console.log(result));

  // db.close();
});
