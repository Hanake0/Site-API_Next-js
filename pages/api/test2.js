import { db } from '../../sqlite/connection.js';

export default (req, res) => {
    const result = db.prepare(`SELECT * FROM test`).get();

    res.statusCode = 200;
    res.json({ init: result.initDate, last: result.lastTest });

    const stmnt = db.prepare(`REPLACE INTO test (ID, initDate, lastTest) VALUES ( 1, (SELECT initDate FROM test WHERE id = 1), ? )`);
    stmnt.run(new Date().toISOString());
}
