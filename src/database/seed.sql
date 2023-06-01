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

INSERT INTO posts (id, artist, song, spotify_url, picture_path, user_id) VALUES
(1, 'elvis presley', 'jailhouse rock', 'https://open.spotify.com/track/4gphxUgq0JSFv2BCLhNDiE?si=ed369955e7354e25','hello', 3),
(2, 'dolly parton', 'jolene', 'https://open.spotify.com/track/2SpEHTbUuebeLkgs9QB7Ue?si=cf4c20a5c7664626','hello', 4),
(3, 'tool', 'schism', 'https://open.spotify.com/track/55mJleti2WfWEFNFcBduhc?si=361fbddf3c4a4397','hello', 5),
(4, 'britney spears', 'toxic', 'https://open.spotify.com/track/6I9VzXrHxO9rA9A5euc8Ak?si=fedc7ca679844c63','hello', 6)
ON CONFLICT DO NOTHING;

INSERT INTO ratings (rating, user_id, post_id) VALUES
(1, 3, 1),
(1, 4, 2),
(1, 5, 3),
(1, 6, 4)
ON CONFLICT DO NOTHING;

COMMIT;