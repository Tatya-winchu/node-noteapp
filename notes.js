console.log('Starting Notes.js');
const fs = require('fs');

//fetching th duplicateNotes
var fetchNotes = () => {
  //reading the previous note from an array
  try {
    var noteSting =   fs.readFileSync('notes-data.json');
    return JSON.parse(noteSting);
  } catch (e) {
   return []; //if try fails it will return emptey array
  }
};
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
var addNote = (title, body)=> {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };

  //check the duplicate noteSting
  var duplicateNotes = notes.filter((note)=> note.title === title);
  if(duplicateNotes.length === 0){
  notes.push(note)//pushing the note to the notes array
  saveNotes(notes);
  return note ;
}
};
var getAll = () => {
  //console.log("Getting All the Nodes");
  return fetchNotes();
}
var readNote = (title) =>{
  var notesRead = fetchNotes();
  var readNotes = notesRead.filter((notesRead) => notesRead.title === title );
  return readNotes[0];
//  console.log('Reading  Note', title);
}
var removeNote = (title) => {
//  console.log ('Removing  Note', title);
//fetch note
var notes = fetchNotes();
var filterNotes = notes.filter((note) => note.title !== title);
if (notes.filter((note)=> note.title === title)){
  saveNotes(filterNotes);
}
  return notes.length !== filterNotes.length;
}

var notesLog = (note) =>{
  debugger;
  console.log('----');
  console.log('Title :' + note.title);
  console.log('Body :' + note.body);
}
module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
  notesLog
}
