BEGIN;

INSERT INTO users(name)VALUES
('mark')
('taha')
('zack')
('cameo')
ON CONFLICT DO NOTHING;

INSERT INTO posts(artist, song)VALUES
('elvis presley', 'jailhouse rock')
('dolly parton', 'jolene')
('tool', 'schism')
('britney spears', 'toxic')
ON CONFLICT DO NOTHING;

INSERT INTO ratings(rating)VALUES
(1)
(2)
(3)
(5)
ON CONFLICT DO NOTHING;


COMMIT;
-- is this necessary? 
PRAGMA foreign_keys = ON;
