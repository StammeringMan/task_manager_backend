/**
 * 
 * @author: Abhinav Alok on 06'th Oct, 2020
 */

import express from "express";
import { getAllTasks, getSingleTaskById, createTask, updateTaskById, deleteTaskById, assignTaskById } from "./taskController.js"


const taskRoute = express.Router();

taskRoute
    .get('/allTasks',  getAllTasks)
    .get('/:id', getSingleTaskById)


    .post('/create', createTask)
    .post('/assignTask/:id', assignTaskById)

    .patch('/updateTask/:id', updateTaskById)

    .delete('/deleteTask/:id', deleteTaskById)

export default taskRoute;