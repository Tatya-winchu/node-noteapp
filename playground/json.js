
const fs = require ('fs');

var orignalNote = {
  title: 'Tatya',
  body: 'Data'
};
var originalNoteString = JSON.stringify(orignalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log (typeof note);
console.log(note.title);
