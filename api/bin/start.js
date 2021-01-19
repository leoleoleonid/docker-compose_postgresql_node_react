const Server = require('../server');
const dump = require('./dump');

dump()
  .then(() => Server.start(process.env.PORT))
  .catch(e => console.error(e));
