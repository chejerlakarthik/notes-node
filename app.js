const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
    describe : 'Title for the note',
    demand: true,
    alias : 't'
};

const messageOptions = {
    describe : 'Message for the note',
    demand : true,
    alias : 'm'
};

const notes = require('./notes');
const args = yargs
                .command('add', 'Add a new title', {
                    title : titleOptions,
                    message : messageOptions
                })
                .command('list', 'List all titles', {})
                .command('remove', 'Remove note by title', {
                    title : titleOptions
                })
                .command('findOne', 'Find note by title', {
                    title : titleOptions
                })
                .help()
                .argv;

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
