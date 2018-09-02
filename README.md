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

```javascript
const fastify = require('fastify')();

fastify.register(require('fastify-chalk'), {disable:false});


fastify.listen(8080, (err) => {
  //use the following shortands
  fastify.trace('Server is running');
  fastify.debug('Server is running');
  fastify.info('Server is running');
  fastify.warn('Server is running');
  fastify.error('Server is running');
  fastify.fatal('boom!');
  
  //or use chalk directly
  console.log(fastify.chalk.red('using fastify.chalk.red()'));
});
```

This will output:
![Example Output](example.png)

You can override the following properties in options object
```
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
};```