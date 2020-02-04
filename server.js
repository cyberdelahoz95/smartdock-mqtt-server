'use strict';

const chalk = require('chalk');
const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);

const settings = {
  port: 1883,
};

server.listen(settings.port, function () {
	console.log(chalk.green('server listening on port'), settings.port);
});

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`);
  console.error(err.stack);
  process.exit(1);
}

process.on('uncaughtException', handleFatalError);
process.on('unhandledRejection', handleFatalError);