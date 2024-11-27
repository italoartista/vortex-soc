const express  = require('express')
const app = express() 
const playerRoute = require('./routes/playerRoute')

app.use(express.json())


app.use('/api', playerRoute)


app.listen(3000, ( ) => console.log("Servidor rodando na porta 3000") );

