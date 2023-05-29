const express = require('express')
const router = express.Router()
const {getAllTodoItems, CreateNewTodoItems, UpdateATodoItem, DeleteATodoItem} = require('../controllers/todo-list')
// route.get('/', (request, response) =>
// {
//     response.send("To do list")
// })
router.route('/').get(getAllTodoItems).post(CreateNewTodoItems)
router.route('/:id').patch(UpdateATodoItem).delete(DeleteATodoItem)
module.exports = router