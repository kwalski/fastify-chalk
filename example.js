const fastify = require('fastify')();
const fs = require('fs');

//fastify.register(require('./index'))
// or provide options object
 fastify.register(require('./index'), {
     disabled:false, 
     symbols:{
         error:'ERR', 
     },
    // outStream:'./log-file.txt'
 });



fastify.listen(8080, (err) => {
  //use the following shortands
  fastify.trace('This is a trace line');
  fastify.debug('This is a debug line');
  fastify.info('This is an info line');
  fastify.warn('This is a warning line');
  fastify.error('This is an error line');
  fastify.fatal('This is a fatal line');
  
  //or use chalk directly
  console.log(fastify.chalk.green('console.log(fastify.chalk.green( ... ))'));
});

