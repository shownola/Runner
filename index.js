#!/usr/bin/env nodemon

const chokidar = require('chokidar');

chokidar.watch('.')
  .on('add', () => console.log('START USERS PROGRAM'))
  .on('change', () => console.log('FILE CHANGED'))
  .on('unlink', () => console.log('FILE UNLINKED'));
