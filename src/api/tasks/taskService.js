/**
 * 
 * @author: Abhinav Alok on 06'th Oct, 2020
 */

import TaskModel from "./taskModel.js";



export const createNewTask = async (task) => {
    console.log(task)
    let newTask = new TaskModel(task)
    newTask.name = task.name
    newTask.createdBy = {
        name: currentUser.name,
        mobile: currentUser.mobile,
        email: currentUser.email
    }
    newTask.statusHistory.unshift({
        createdBy: {
            name: currentUser.name,
            mobile: currentUser.mobile,
            email: currentUser.email
        },
        createdOn: new Date()
    })
    return await newTask.save();
}

/**
 *  Returns all Tasks in current system.
 * 
 * @return [{object}] : Array of Tasks Object
 */
export const getTasks = async () => {
    return await TaskModel.find();
}


/**
 *  Returns an Single Task.
 * 
 * @param {string} id : id
 * @return {object} task : Task Object
 */
export const getSingleTask = async (id) => {
    return await TaskModel.findById(id)
}

/**
 *  Returns an updated task.
 * 
 * @param {string} id : id
 * @param {object} task: new task object
 * @return {object} task : Updated Task Object
 */
export const updateTask = async (id, task) => {
    return await TaskModel.findByIdAndUpdate(id, task, { new: true })
}


export const assignTask = async (taskId, userId, currentUser) => {
    let task = await TaskModel.findById(taskId);
    task.assignedTo = userId;
    task.status = 'assigned';
    task.assignee = {
        name: currentUser.name,
        email: currentUser.email,
        mobile: currentUser.mobile
    };
    task.statusHistory.unshift({
        assignee: {
            name: currentUser.name,
            email: currentUser.email,
            mobile: currentUser.mobile
        },
        assignedTo: userId,
    })
    return task.save()
}

/**
 * 
 * @param {string} id : id
 */
export const deleteTask = async (id) => {
    return await TaskModel.findByIdAndDelete(id)
}

