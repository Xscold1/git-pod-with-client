const express = require('express');
const cors = require('cors');
const user = require('./src/routes/user')
const path = require('path')
const queris = require('./src/utils/initialize-database-table')
const app = express();
app.use(express.json())
app.use(express.static("public"));
app.use("/public", express.static(path.join(__dirname, 'public')));


app.use(cors({ credentials: true }));

app.use('/api', user)

const PORT = 2000;

app.listen(PORT, () =>{
    console.log(`port start at port ${PORT}`)
})