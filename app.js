const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const args = yargs.argv;

const command = args._[0];
const title = args.title;
const message = args.message;

if (command === 'add'){
    let newNote = notes.addNote(title, message);
    notes.logNote(newNote);
}   
else if (command === 'remove'){
    let isRemoved = notes.removeNote(title);
    console.log(isRemoved
                ? `Note removed for title='${title}'`
                : `Note not found for title='${title}'`);
}
else if (command === 'findOne'){
    let note = notes.findNote(title);
    notes.logNote(note);
}
else if (command === 'list')
    notes.listAllNotes();
else
    console.log(`Invalid command: ${command}`);
