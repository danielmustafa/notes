console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
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

        for (var i =0; i<notesList.length;i++){
            var note = notesList[i]
            notes.outputNote(note);
        }
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


