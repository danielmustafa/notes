console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2]

if (command != null){
    if (command === 'add'){
        notes.addNote(argv.title, argv.body);
    } else if (command === 'list'){
        notes.getAll();
    } else if (command === 'remove'){
        notes.remove(argv.title);
    } else if (command === 'read') {
        notes.getNote(argv.title);
    } else {
        console.log('Command not recognized');
    }
}
