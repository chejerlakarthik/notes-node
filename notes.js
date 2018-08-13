const fs = require('fs');
const _ = require('lodash');
const JSON_FILE = 'data.json';
const LIST_NOTES_MSG = 'Listing all notes';
const NO_NOTES_MSG = 'No notes available';

const addNote = (title, message) => {
    let notesList = [];
    let noteToAdd = {title, message};
    notesList = readNotesFromFile();
    let duplicates = notesList.filter( note => note.title === title );
    if (duplicates.length === 0){
        notesList.push(noteToAdd);
        writeNotesToFile(notesList);
        return noteToAdd;
    }
};

const removeNote = (title) => {
    let notes = [];
    notes = readNotesFromFile();
    if (notes.length === 0){
        console.log(NO_NOTES_MSG);
        return;
    }
    let filteredNotes = notes.filter(note => note.title !== title);
    writeNotesToFile(filteredNotes);
    return notes.length !== filteredNotes.length;
};

const findNote = (title) => {
    let notes = [];
    notes = readNotesFromFile();
    return _.find(notes, note => note.title === title);
};

const listAllNotes = () => {
    let notes = [];
    notes = readNotesFromFile();
    let header = notes.length > 0 ? LIST_NOTES_MSG : NO_NOTES_MSG;
    console.log(header);

    notes.forEach(note => logNote(note));
};

const readNotesFromFile = () => {
    try {
        let notesString = fs.readFileSync(JSON_FILE);
        return JSON.parse(notesString);
    }
    catch(e) {
        if (e instanceof SyntaxError){
            console.log(`Invalid data in ${JSON_FILE}`);
            return;
        }
        else{
            console.log(`${JSON_FILE} doesn't exist, creating now..`);
            fs.writeFileSync(JSON_FILE, JSON.stringify([]));
            return [];
        }
    }
};

const writeNotesToFile = (notes) => {
    fs.unlinkSync(JSON_FILE);
    fs.writeFileSync(JSON_FILE, JSON.stringify(notes));
};

const logNote = (note) => {
    if (note)
        console.log(`Title=${note.title} | Message=${note.message}`);
    else
        console.log('No results');
}

module.exports = {
    addNote,
    removeNote,
    findNote,
    listAllNotes,
    logNote
}