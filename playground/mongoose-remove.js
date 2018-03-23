const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({})
//   .then((res) => console.log(res));

Todo.findOneAndRemove({ _id: '5ab5085e4c113e9b6bb2e08c' })
  .then((todo) => console.log(todo));

// Todo.findByIdAndRemove('5ab5085e4c113e9b6bb2e08c')
//   .then((todo) => console.log(todo));
