// const mysql = require('mysql2')
// const {createTable, createDb,createUser, grantPriv } = require('./queries')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'practice',
//     password: 'practice',
//     database: 'practice'
// })

// connection.connect((err)=>{
//     if(err){
//         console.log(err)
//     }
//     try{

//         // connection.query(createUser,(err, result)=>{
//         //     if(err) throw err
//         //     //console.log('databaseCreated')
//         // })

//         // connection.query(grantPriv,(err, result)=>{
//         //     if(err) throw err
//         //     //console.log('databaseCreated')
//         // })

//         connection.query(createDb,(err, result)=>{
//             if(err) throw err
//             console.log('databaseCreated')
//         })
//         connection.query(createTable,(err, result)=>{
//             if(err) throw err
//             console.log('table created')
//         })
        
//     }catch(err){
//         console.log(err)
//     }
// })

