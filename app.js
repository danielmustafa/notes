const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var title = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

var body = {
    describe: 'Body of note.',
    demand: true,
    alias: 'b'
}

const argv = yargs
.command('add','Add a new note.',{title,body})
.command('list', 'List all available notes.')
.command('read', 'Read a note.',{title})
.command('remove','Remove a note.', {title})
.help()
.argv;
var command = process.argv[2]

if (command != null){
    if (command === 'add'){
        var note;
        try {
            note = notes.addNote(argv.title, argv.body);
            if (note){
                console.log('Note added.')
                notes.outputNote(note);
            } else {
                console.log('Note already exists.')
            }
        } catch (err){
            console.log(err)
        }
        
    } else if (command === 'list'){
        var notesList = notes.getAll();
        notesList.forEach((note) => notes.outputNote(note))
    } else if (command === 'remove'){
        var noteRemoved = notes.remove(argv.title);
        var message = noteRemoved ? 'Note removed.' : 'Note not found.';
        console.log(message);
    } else if (command === 'read') {
        var note = notes.getNote(argv.title);
        if (note){
            notes.outputNote(note);
        } else {
            console.log('Note not found');
        }
        
    } else {
        console.log('Command not recognized');
    }
}


