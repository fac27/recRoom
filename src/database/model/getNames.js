const db = require('../db')

const get_names = db.prepare(/*sql*/
`SELECT name 
 FROM users`
)

const getUsers = () => {
const rows = get_names.all();
const names = rows.map(row => row.name);
return names;
}

module.exports = { getUsers }