
/**
 *  @author: Abhinav Alok on 02 Oct, 2020
 */

import express from "express";
import {getAllUsers, getSingleUserById, updateUserById, deleteUserById, getUserByQuery, updateUserRole } from "./userController.js"


const userRoute = express.Router();

userRoute
    .get('/allUsers',  getAllUsers)
    .get('/:id', getSingleUserById)

    .post('/search', getUserByQuery)


    .patch('/updateUser/:id', updateUserById)
    .patch('updateRole/:id', updateUserRole)

    .delete('/deleteUser/:id', deleteUserById)

export default userRoute;