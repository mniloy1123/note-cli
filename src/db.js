import fs from 'node:fs/promises';
//hard code the path to our db (files)
const DB_PATH = new URL('../db.json', import.meta.url).pathname;

//get the entire db
export const getDB = async() => {
    const db = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(db);
}

export const saveDB = async(db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2)); //2 spaces
    return db;
}

export const insertDB = async(note) => {
    const db = await getDB();
    db.notes.push(note);
    await saveDB(db);
    return note;
}