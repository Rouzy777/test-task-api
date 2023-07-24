const { version } = require('../../package.json');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Test API',
    version,
  },
};

module.exports = swaggerDef;