

const createUser = "CREATE USER if not exist'practice'@'localhost' IDENTIFIED BY 'practice'"

const grantPriv = "GRANT ALL PRIVILEGES if not already granted ON *.* TO 'practice'@'localhost' WITH GRANT OPTION"

const createDb = 'CREATE DATABASE IF NOT EXISTS practice'

const createTable = 'CREATE TABLE IF NOT EXISTS audit (name varchar(255), date text, time text, buildingNum varchar(255))'

const insertData = 'INSERT INTO audit (name, date, buildingNum) VALUES (?,?,?)'

const selectAll = 'SELECT * FROM audit';


module.exports ={
    createDb,
    createTable,
    insertData,
    createUser,
    grantPriv,
    selectAll
}