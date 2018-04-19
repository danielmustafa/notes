console.log('Starting notes.js')

var fs = require('fs');
const DATAFILE = 'notes-data.json'

var addNote = (title,body) => {
  var note = {
    title,
    body
  }

  var notes = readNotesFromFile();
  if (!noteExists(title)){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

var getAll = () => {
  return readNotesFromFile();
}

var remove = (title) => {
  var notes = readNotesFromFile();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
}

var getNote = (title) => {
  var notes = findNoteByTitle(title);
  return notes[0];
}

function readNotesFromFile() {
  var notes;
  try {
    var notesString = fs.readFileSync(DATAFILE)
    notes = JSON.parse(notesString);
  } catch (err) {
    notes = []
  }
  return notes;
}

function noteExists(title){
  var duplicateNotes = findNoteByTitle(title);
  return duplicateNotes.length != 0;
}

function findNoteByTitle(title){
  var notes = readNotesFromFile();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes;
}

var saveNotes = (notes) => {
  fs.writeFileSync(DATAFILE,JSON.stringify(notes)); 
}

var outputNote = (note) => console.log(`Title: ${note.title}\n---\nBody: ${note.body}`);

module.exports = {
  addNote,
  getAll,
  remove,
  getNote,
  outputNote
};
