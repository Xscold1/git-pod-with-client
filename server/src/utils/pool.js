const mysql = require("mysql2");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'practice',
    password: 'practice',
    database: 'practice',
});

const query = async (query, params, transaction) => {
    try {
        const result = await transaction.query(query, params);
        return result[0];
    } catch (err) {
        console.log('err', err);
        throw err;
    }
};


module.exports = {
    pool: pool.promise(),
    query
};
