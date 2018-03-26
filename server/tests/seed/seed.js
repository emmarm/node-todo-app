const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('../../models/todo');
const { User } = require('../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const dummyTodos = [
  {
    _id: new ObjectID(),
    text: 'Test todo 1',
    _creator: userOneId
  },
  {
    _id: new ObjectID(),
    text: 'Test todo 2',
    completed: true,
    completedAt: 123,
    _creator: userTwoId
  }
];

const populateTodos = (done) => {
  Todo.remove({})
    .then(() => Todo.insertMany(dummyTodos))
    .then(() => done());
};

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
    password: 'userTwoPass',
    tokens: [{
      access: 'auth',
      token: jwt.sign({ _id: userTwoId, access: 'auth' }, 'abc123').toString()
    }]
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
