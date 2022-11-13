const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"Ju!iu5Ca35arP",
    host:"localhost",
    database:"farmers"
})

module.exports = pool; 