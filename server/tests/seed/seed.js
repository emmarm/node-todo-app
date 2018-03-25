const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('../../models/todo');
const { User } = require('../../models/user');

const dummyTodos = [
  {
    _id: new ObjectID(),
    text: 'Test todo 1'
  },
  {
    _id: new ObjectID(),
    text: 'Test todo 2'
  }
];

const populateTodos = (done) => {
  Todo.remove({})
    .then(() => Todo.insertMany(dummyTodos))
    .then(() => done());
};

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const dummyUsers = [
  {
    _id: userOneId,
    email: 'userOne@example.com',
    password: 'userOnePass',
    tokens: [{
      access: 'auth',
      token: jwt.sign({ _id: userOneId, access: 'auth' }, 'abc123').toString()
    }]
  },
  {
    _id: userTwoId,
    email: 'userTwo@example.com',
    password: 'userTwoPass'
  }
];

const populateUsers = (done) => {
  User.remove({})
    .then(() => {
      const userOne = new User(dummyUsers[0]).save();
      const userTwo = new User(dummyUsers[1]).save();

      return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = {
  dummyTodos,
  populateTodos,
  dummyUsers,
  populateUsers
};
