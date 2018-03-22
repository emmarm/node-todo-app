const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  db.collection('Todos').find({ _id: new ObjectID('5ab110d866f111b61b2e44ba') }).toArray()
    .then((docs) => {
      console.log('TODOS');
      console.log(JSON.stringify(docs, undefined, 2));
    })
    .catch((e) => {
      console.log('Unable to fetch todos', e);
    });

  db.collection('Todos').find().count()
    .then((count) => {
      console.log(`TODOS count: ${count}`);
    })
    .catch((e) => {
      console.log('Unable to fetch todos', e);
    });

  db.collection('Users').find({ name: 'Emma' }).count()
    .then((count) => {
      console.log(`${count} user${count === 1 ? '' : 's'} with that name.`);
    })
    .catch((e) => {
      console.log('Unable to fetch todos', e);
    });

  // db.close();
});
