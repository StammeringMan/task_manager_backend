
/**
 *  @author: Abhinav Alok on 02 Oct, 2020
 */

import { getUsers, getUserById, updateUser, deleteUser, searchUser, updateRole } from './userService.js';


/**
 *  Returns an User.
 * 
 * @param {*} req Object from express
 * @param {*} res Object from express
 */
export const getAllUsers = (req, res) => {
  getUsers()
    .then(user => {
      res.send(user)
    })
    .catch(err => {
      res
        .status(500)
        .send({
          message: err.message || "Some error occurred while fetching users."
        })
    })
}

/**
 *  Returns an Single User.
 * 
 * @param {*} req Object from express
 * @param {*} res Object from express
 */
export const getSingleUserById = (req, res) => {
  getUserById(req.params.id)
    .then((user) => {
      res
        .status(200)
        .json(user)
    })
    .catch((err) => {
      res
        .status(500)
        .message(err.message || 'User not found')
    })
}

/**
 *  Returns an Update User.
 * 
 * @param {*} req Object from express
 * @param {*} res Object from express
 */
export const updateUserById = (req, res) => {
  updateUser(req.params.id, req.body)
    .then((user) => {
      res
        .status(200)
        .json(user)
    })
    .catch((err) => {
      res
        .status(500)
        .message(err.message || 'Some error occured')
    })

}

/**
 *  Returns an {}.
 * 
 * @param {*} req Object from express
 * @param {*} res Object from express
 */

export const deleteUserById = (req, res) => {
  deleteUser(req.params.id)
    .then(() => {
      res
        .json({})
        .status(200)
    })
    .catch((err) => {
      res
        .status(500)
        .message(err.message || 'Some error occured')
    })
}


export const getUserByQuery = (req, res) => {
  let query = req.body.query
  searchUser(query)
    .then((user) => {
      res
        .status(200)
        .json(user)
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || 'Some error occured' })
    })
}



export const updateUserRole = (req, res) => {
  updateUserRole()
    .then((user) => {
      res
        .status(200)
        .json(user)
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || 'Some error occured' })
    })
}


