import Database from 'better-sqlite3';

const db = new Database(':memory:', { verbose: console.log });

const test = db.prepare(`CREATE TABLE IF NOT EXISTS test ( id IINTEGER PRIMARY KEY, initDate TEXT NOT NULL, lastTest TEXT)`);
test.run();

const setTest = db.prepare(`REPLACE INTO test( id,  initDate ) VALUES ( 1, ? )`);

setTest.run(new Date().toISOString());

export { db };