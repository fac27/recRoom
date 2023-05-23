BEGIN;

INSERT INTO users (id, name) VALUES
(1, 'mark'),
(2, 'taha'),
(3, 'zack'),
(4, 'cameo'),
(5, 'alphonso'),
(6, 'beth'),
(7, 'simon'),
(8, 'tom')
ON CONFLICT DO NOTHING;

INSERT INTO posts (id, artist, song, user_id) VALUES
(1, 'elvis presley', 'jailhouse rock', 3),
(2, 'dolly parton', 'jolene', 4),
(3, 'tool', 'schism', 5),
(4, 'britney spears', 'toxic', 6)
ON CONFLICT DO NOTHING;

INSERT INTO ratings (rating, user_id, post_id) VALUES
(1, 3, 1),
(1, 4, 2),
(1, 5, 3),
(1, 6, 4)
ON CONFLICT DO NOTHING;

COMMIT;