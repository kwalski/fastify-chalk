const fastify = require('fastify')();

fastify.register(require('fastify-chalk'))
// or provide options object
// fastify.register(require('fastify-chalk'), {disabled:false});



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

