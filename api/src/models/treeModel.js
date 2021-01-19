const sql = require('sql-template-strings');
const db = require('../db');

module.exports = {
  async findOne(id) {
    const {rows} = await db.query(sql`SELECT path FROM test WHERE id=${id} LIMIT 1;`);

    if (rows.length !== 1) {
      return null;
    }

    return rows[0];
  },
  async find() {
    const {rows} = await db.query(sql`SELECT * FROM test;`);

    if (!rows.length) {
      return null;
    }

    return rows;
  },
  async findOneAndDelete(id) {
    const treeItem = await this.findOne(id);
    await this.deleteOne(id);
    return treeItem;
  },
  async create(path, name) {
    await db.query(sql`INSERT INTO test (path, name) VALUES (${path}, ${name});`);
  },
  async update(id, path, name) {
    await db.query(sql`UPDATE test SET name = ${name}, path = ${path} WHERE id=${id};`);
    return id;
  },
  async deleteOne(id) {
    await db.query(sql`DELETE FROM test WHERE id=${id};`);
  }
};
