//console.log('Starting app.');
//Third Party Module
const fs = require('fs');//file module
const _ = require('lodash');//_ is the way we require lodash mosule
const yargs = require('yargs');
const notes = require('./notes.js');//requiring the notes.js
const titleOptions = {
  describe : 'Title of the note',
  demand : true,
  alias : 't'
};
const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias : 'b'
};
const argv = yargs
.command('add','Add a new Note',{
  title:titleOptions,
  body:bodyOptions
})
.command('list', 'List of all note')
.command('read','read a note',{
  title: titleOptions
})
.command('remove', 'remove a note',{
  title: titleOptions
})
.help()
.argv; //yargs is the parsing moodule
var command = process.argv[2];
if (command == 'add'){
var note = notes.addNote(argv.title, argv.body);
if (note){
console.log('Node Added');
notes.notesLog(note);
}else{
console.log('Node Already Exists');
}
}else if (command== 'list'){
  var getNotes = notes.getAll();
  console.log(`Printing ${getNotes.length} note(s).`);
  getNotes.forEach((note) => notes.notesLog(note));
}else if (command == 'read'){
var readNotes =  notes.readNote(argv.title)
if(readNotes){
  console.log('Reading the Note/ Note Found');
  notes.notesLog(readNotes);

}else{
  console.log('Wrong Note Title / Note not Found');
}
} else if(command == 'remove'){

  var noteDelete = notes.removeNote(argv.title);
  //use of turnary operator
  var message = noteDelete ? 'Note was Deleted': 'Note not Found in list';
//turnary operator : condition ? 'True statement': 'False Statement'
  console.log(message);
}
else {
  console.log('command not recognized');
}
