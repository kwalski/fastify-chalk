const fastify = require('fastify')();

fastify.register(require('./index.js'), {disable:false});

//you can override the following properties in options object
options = {
  time: true,
  timeFormat: 'HH:mm:ss',
  level:'all',
  trace:'#666666',
  debug:'#7b1fa2',
  info:'#0000ff',
  warn:'#ff4400',
  error:'#aa0000',
  fatal:'#ff0000',
  disable:false
};


fastify.listen(8080, (err) => {
  //use the following shortands
  fastify.trace('This is a trace line');
  fastify.debug('This is a debug line');
  fastify.info('This is an info line');
  fastify.warn('This is a warning line');
  fastify.error('This is an error line');
  fastify.fatal('This is fatal line');
  
  //or use chalk directly
  console.log(fastify.chalk.green('console.log(fastify.chalk.green( ... ))'));
});

