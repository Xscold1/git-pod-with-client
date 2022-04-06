const moment = require('moment');
const {insertData, selectAll} = require('../../utils/queries')
const {pool, query} = require('../../utils/pool');
const {validate} = require('../../utils/validate');

// const acceptInput = async (req,res) => {
//     try{
//         let input = await validate
//         .validateAsync(req.body).catch((err)=>{
//             throw{status: 401, message: err.message}
//         })
//         var newDt = moment(newDt).format("YYYY-MM-DD") ;
//         //var time = moment(time).valueOf("HH:MM")
//         //console.log(time)
    
//         const data = {
//             name: req.body.name,
//             currentDate: moment(newDt).format("YYYY-MM-DD") ,
//             //currentTime: moment(currentTime).format("hh:mm")
//         }
//         res.send(data)
//     }catch(err){
//         res.send({status: 401, message: err.message})
//     }
// }

const insertDatatoDatabase = async (req, res) => {
    const transaction = await pool.getConnection()
    try{
        const {name, date,time,  buildingNum} = req.body
        console.log('buildingNum', buildingNum)
        const insertDatas = await query(insertData, [name, date,time, buildingNum] ,transaction)

        const select = await query(selectAll, [], transaction)
        transaction.commit()
        transaction.release()
        res.send(select)
    }catch(err){
        console.log('oh no')
        res.send({status: 402, message: err.message})
        
    }
}
module.exports ={
    insertDatatoDatabase
}
