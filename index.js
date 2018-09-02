const fp = require('fastify-plugin')
const momment = require('moment');
const chalk = require('chalk');

const levels = {
  all:0,
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
};

const symbols={
  trace: '\u26b2',
  debug: '\u2689',
  info: '\u2139',
  warn: '\u26A0',
  error: '\u2a02',
  fatal: '\u2620'
};

const defaultOptions = {
  time: true,
  timeFormat: 'HH:mm:ss',
  level: 'all',
  trace: '#455a64',
  debug:'#d500f9',
  info: '#0000ff',
  warn:'#ff4400',
  error:'#d50000',
  fatal:'#aa0000',
  disabled:false
};

function plugin (fastify, opts, next) {

  const options = Object.assign(defaultOptions, opts);
    
  const symb = options.symbols?Object.assign(symbols,options.symbols):symbols;
    
  function trace () {
    if (levels[options.level] > 10) return;
    log('trace', arguments);
  }
    
  function debug () {
    if (levels[options.level] > 20) return;
    log('debug', arguments);
  }
  
  function info () {
    if (levels[options.level] > 30) return;
    log('info', arguments);
  }

  function warn () {
    if (levels[options.level] > 40) return;
    log('warn', arguments);
  }

  function error () {
    if (levels[options.level] > 50) return;
    log('error', arguments);
  }
    
  function fatal () {
    if (levels[options.level] > 60) return;
    log('fatal', arguments);
  }

  function log (type, text) {
    if(options.disabled) return;
    const time = options.time ? momment().format(options.timeFormat): '';
    console.log(
        chalk.hex(options[type])(time),
        chalk.hex(options[type]).bold(symb[type]),'',
        chalk.hex(options[type]).bold(concat(text))
    );
  }

  function concat(args) {
    return Array.from(args).join(' ');
  }

  const logger = {
    trace,
    debug,
    info,
    warn,
    error,
    fatal
  };

  Object.keys(logger).forEach(k => {
    fastify.decorate(k, logger[k]);
  });

  fastify.decorate('chalk',chalk);


  next();
}

module.exports = fp(plugin, {
  name: 'fastify-chalk'
});
