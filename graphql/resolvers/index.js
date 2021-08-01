const authResolver = require('./auth');
const eventsResolver = require('./events');

//Root resolver
const rootResolver = {
  ...authResolver,
  ...eventsResolver,
};

module.exports = rootResolver;
