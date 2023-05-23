BEGIN;

INSERT INTO users(name)VALUES
('mark')
('taha')
('zack')
('cameo')
('alphonso')
('beth')
('simon')
('tom')
ON CONFLICT DO NOTHING;

INSERT INTO posts(artist, song, user_id,)VALUES
('elvis presley', 'jailhouse rock')
('dolly parton', 'jolene')
('tool', 'schism')
('britney spears', 'toxic')
ON CONFLICT DO NOTHING;

INSERT INTO ratings(rating, user_id, post_id)VALUES
(1)
(-1)
(1)
(-1)
ON CONFLICT DO NOTHING;


COMMIT;
-- is this necessary? 
PRAGMA foreign_keys = ON;
