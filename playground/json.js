// var obj = {
//   name: 'Kedar'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// var personString = '{"name": "Kedar", "age":"26"}';
// var person = JSON.parse(personString);
// console.log (typeof person);
// console.log (person);
const fs = require ('fs');

var orignalNote = {
  title: 'Kedar',
  body: 'Data'
};
var originalNoteString = JSON.stringify(orignalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log (typeof note);
console.log(note.title);
