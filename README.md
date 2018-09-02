# fastify-chalk
 
A colorful terminal logger using [chalk](https://github.com/chalk/chalk) for [Fastify](fastify.io).

## Features

* Displays time.
* Colorful outputs.
* Logging levels: all, trace, debug, info, error, fatal

## Install

```bash
npm install fastify-chalk
```

## Usage

```
const fastify = require('fastify')();
fastify.register(require('fastify-chalk'))
// or provide options object
// fastify.register(require('fastify-chalk'), {disabled:false});


fastify.listen(8080, (err) => {
  // use the following shortands
  fastify.trace('This is a trace line');
  fastify.debug('This is a debug line');
  fastify.info('This is an info line');
  fastify.warn('This is a warning line');
  fastify.error('This is an error line');
  fastify.fatal('This is fatal!');
  
  // or use chalk directly
  console.log(fastify.chalk.green('console.log(fastify.chalk.green( ... ))'));
});
```

### This will output

![Example Output](example.png =300x120)


## API

You can override the following properties in options object

```
options = {
  time: true,
  timeFormat: 'HH:mm:ss', //moment.js time format
  level:'all', //eg., error will show only error and above (fatal)
  trace:'#666666',
  debug:'#7b1fa2',
  info:'#0000ff',
  warn:'#ff4400',
  error:'#aa0000',
  fatal:'#ff0000',
  disabled:false //true to disable logging
}; 
```