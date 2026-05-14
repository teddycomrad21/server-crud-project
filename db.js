import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const adapter = new JSONFile('db.json');

const db = new Low(adapter, {});
// db.data = db.data || {};

await db.read();

db.data.posts || [];

// console.log('Data: ', db.data);

export default db;