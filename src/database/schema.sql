PRAGMA foreign_keys = ON;

BEGIN;

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  artist VARCHAR(255) NOT NULL,
  song VARCHAR(255) NOT NULL,
  picture_path VARCHAR(255) NOT NULL,
  spotify_url VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id),
  posted_at TIMESTAMP DEFAULT (DATETIME('now'))
);

CREATE TABLE IF NOT EXISTS ratings (
  user_id INTEGER REFERENCES users(id),
  post_id INTEGER REFERENCES posts(id),
  rating INTEGER NOT NULL,
  rated_at TIMESTAMP DEFAULT (DATETIME('now')),
  PRIMARY KEY (user_id, post_id)
);

COMMIT;