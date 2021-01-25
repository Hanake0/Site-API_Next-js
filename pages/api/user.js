import { db } from '../../sqlite/connection.js';

export default (req, res) => {
  const init = db.prepare(`CREATE TABLE IF NOT EXISTS users (
    num INTEGER PRIMARY KEY,
    id TEXT NOT NULL UNIQUE,
    invites INTEGER NOT NULL,
    boosting INTEGER,
    messages INTEGER NOT NULL,
    xp INTEGER NOT NULL,

    coins INTEGER NOT NULL,
    gems INTEGER NOT NULL
  )`);

  init.run();

  res.statusCode = 200
  res.json({ name: 'Joe Mama' })
}
