const db = require('../src/db');

const dump = async function () {
  const client = await db.connect();

  await client.query(`
  DROP TABLE IF EXISTS test;
  CREATE EXTENSION IF NOT EXISTS ltree;
  CREATE TABLE test (id serial primary key, path ltree, name varchar);
  INSERT INTO test (path, name) VALUES ('Top', 'Top');
  INSERT INTO test (path, name) VALUES ('Top.Science', 'Science');
  INSERT INTO test (path, name) VALUES ('Top.Science.Astronomy', 'Astronomy');
  INSERT INTO test (path, name) VALUES ('Top.Science.Astronomy.Astrophysics', 'Astrophysics');
  INSERT INTO test (path, name) VALUES ('Top.Science.Astronomy.Cosmology', 'Cosmology');
  INSERT INTO test (path, name) VALUES ('Top.Hobbies','Hobbies');
  INSERT INTO test (path, name) VALUES ('Top.Hobbies.Amateurs_Astronomy', 'Amateurs_Astronomy');
  INSERT INTO test (path, name) VALUES ('Top.Collections', 'Collections');
  INSERT INTO test (path, name) VALUES ('Top.Collections.Pictures', 'Pictures');
  INSERT INTO test (path, name) VALUES ('Top.Collections.Pictures.Astronomy', 'Astronomy');
  INSERT INTO test (path, name) VALUES ('Top.Collections.Pictures.Astronomy.Stars', 'Stars');
  INSERT INTO test (path, name) VALUES ('Top.Collections.Pictures.Astronomy.Galaxies', 'Galaxies');
  INSERT INTO test (path, name) VALUES ('Top.Collections.Pictures.Astronomy.Astronauts', 'Astronauts');
  CREATE INDEX IF NOT EXISTS path_gist_idx ON test USING GIST (path);
  CREATE INDEX IF NOT EXISTS path_idx ON test USING BTREE (path);
  CREATE INDEX IF NOT EXISTS path_gist_idx ON test USING GIST (path);
  CREATE INDEX IF NOT EXISTS path_idx ON test USING BTREE (path);
  `);

  await client.release(true);
};

module.exports = dump;

