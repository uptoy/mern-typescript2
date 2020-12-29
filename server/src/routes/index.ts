import {Router} from 'express'
import  {getTodos,addTodo,updateTodo,deleteTodo} from '../controllers/todos'

const router:Router = Router()

router.get("/todos",getTodos)
router.post("/add-todos",addTodo)
router.put("/edit-todos",updateTodo)
router.delete("/delete-todos/:id",deleteTodo)

export default router