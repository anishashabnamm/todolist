const { urlencoded } = require('express')
const express = require('express')
const app = express()
const PORT =3500
const todolist = require('./routes/todo-list')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/v1/todolist', todolist)


app.get('/', (request, response) =>
{
    response.send('working')
})

app.listen(PORT, console.log("Your code is running in http://localhost:3500/"))