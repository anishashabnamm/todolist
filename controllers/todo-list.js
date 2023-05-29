
// const route = express.Router()

const { json } = require("express")

// route.get('/', (request, response) =>
// {
//     response.send("To do list")
// })
// module.exports = route;

const getAllTodoItems = (request, response) =>
{
    response.send("To do list")
}
const CreateNewTodoItems = (request, response) =>
{
    // response.send("Creating new to do items")
    response.json(request.body)
}

const UpdateATodoItem = (request, response) =>
{
    response.send(`Updating item with ID : ${request.params.id}`)
}
const DeleteATodoItem = (request, response) =>
{
    response.send(`Deleting item with ID : ${request.params.id}`)
}

module.exports = {getAllTodoItems, CreateNewTodoItems, UpdateATodoItem, DeleteATodoItem}
