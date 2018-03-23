const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

const id = '5ab5887b148d256677ac7ab3';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({ _id: id })
//   .then((todos) => console.log('Todos:', todos));

// Todo.find({ _id: id })
//   .then((todo) => console.log('Todo:', todo));

Todo.findById(id)
  .then((todo) => {
    if (!todo) {
      return console.log('ID not found');
    }
    console.log('Todo:', todo);
  }).catch((e) => console.log(e));

User.findById('5ab48cf9136c5e5c6d812921')
  .then((user) => {
    if (!user) {
      return console.log('User not found');
    }
    console.log('User:', user);
  }).catch((e) => console.log(e));
