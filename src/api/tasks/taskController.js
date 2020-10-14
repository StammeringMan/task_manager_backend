/**
 * 
 * @author: Abhinav Alok on 06'th Oct, 2020
 */


import { createNewTask, getTasks, getSingleTask, updateTask, deleteTask, assignTask } from "./taskService.js"
import {getUserById} from "../users/userService.js"
/**
 * Returns a task object 
 * @param {*} req Object from express
 * @param {*} res Object from express
 */

export const createTask = (req, res) => {
  createNewTask(req.body)
    .then((task) => {
      res
        .status(200)
        .json(task)
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || 'Some error occured' })
    })
}


/**
 * Returns all tasks in existing system
 * 
 * @param {*} req Object from express
 * @param {*} res Object from express
 */

export const getAllTasks = (req, res) => {
  console.log(req)
  getTasks()
    .then((tasks) => {
      res
        .status(200)
        .json(tasks)
    })
    .catch((err) => {
      res
        .status(500)
        .message(err.message || 'Some error occured')
    })
}


/**
* Returns single task 
*
* @param {*} req Object from express
* @param {*} res Object from express
*/

export const getSingleTaskById = (req, res) => {
  getSingleTask(req.params.id)
    .then((task) => {
      res
        .status(200)
        .json(task)
    })
    .catch((err) => {
      res
        .status(500)
        .message(err.message || 'Some error occured')
    })
}





/**
 * Returns Updated Task 
 * 
* @param {*} req Object from express
* @param {*} res Object from express
*/

export const updateTaskById = (req, res) => {
  updateTask(req.params.id)
    .then((task) => {
      res
        .status(200)
        .json(task)
    })
    .catch((err) => {
      res
        .status(500)
        .message(err.message || 'Some error occured')
    })
}


/**
 * Returns task after assigning it to an user
 * 
* @param {*} req Object from express
* @param {*} res Object from express
*/
export const assignTaskById = async (req, res) => {
  //TODO: Find out a way to save currentUser object globally 
  //and access it when needed.
  const currentUser = await getUserById(req.user.sub)
  assignTask(req.params.id, req.body.userId, currentUser)
    .then((task) => {
      res
        .status(200)
        .json(task)
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || 'Some error occured' })
    })

}


/**
 * Returns {}
 * 
* @param {*} req Object from express
* @param {*} res Object from express
*/
export const deleteTaskById = (req, res) => {
  deleteTask(req.params.id)
    .then(() => {
      res
        .status(200)
        .json({})
    })
    .catch((err) => {
      res
        .status(500)
        .message(err.message || 'Some error occured')
    })
}






