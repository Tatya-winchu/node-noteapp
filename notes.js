console.log('Starting Notes.js');
const fs = require('fs');

//fetching th duplicateNotes
let fetchNotes = () => {
  //reading the previous note from an array
  try {
    let noteSting =   fs.readFileSync('notes-data.json');
    return JSON.parse(noteSting);
  } catch (e) {
   return []; //if try fails it will return emptey array
  }
};
let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
let addNote = (title, body)=> {
  let notes = fetchNotes();
  let note = {
    title: title,
    body: body
  };

  //check the duplicate noteSting
  let duplicateNotes = notes.filter((note)=> note.title === title);
  if(duplicateNotes.length === 0){
  notes.push(note)//pushing the note to the notes array
  saveNotes(notes);
  return note ;
}
};
let getAll = () => {
  //console.log("Getting All the Nodes");
  return fetchNotes();
}
let readNote = (title) =>{
  let notesRead = fetchNotes();
  let readNotes = notesRead.filter((notesRead) => notesRead.title === title );
  return readNotes[0];
//  console.log('Reading  Note', title);
}
let removeNote = (title) => {
//  console.log ('Removing  Note', title);
//fetch note
let notes = fetchNotes();
let filterNotes = notes.filter((note) => note.title !== title);
if (notes.filter((note)=> note.title === title)){
  saveNotes(filterNotes);
}
  return notes.length !== filterNotes.length;
}

let notesLog = (note) =>{
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
