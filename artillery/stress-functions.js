const faker = require('faker');

var id = 10396801;

const generateHighId = (context, events, done) => {
  const reqId = Math.floor(Math.random() * (id - (id * 0.75))) + Math.floor(id * 0.75);
  context.vars.id = reqId;
  return done();
};

const generateLowId = (context, events, done) => {
  const reqId = Math.floor(Math.random() * (id * 0.75));
  context.vars.id = reqId;
  return done();
};

module.exports = {
  generateHighId,
  generateLowId,
}