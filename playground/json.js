const fs = require('fs');

var originalNote = {
    title: 'Super secret',
    body: 'I farted'
};
// originalNoteString
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
//note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);