
/**
 *  @author: Abhinav Alok on 02 Oct, 2020
 */

import UserModel from "./userModel.js";


/**
 *  Returns all Users in current system.
 * 
 * @return [{object}] : Array of Users Object
 */
export const getUsers = async () => {
    return await UserModel.find();
}

/**
 *  Returns an Single User.
 * 
 * @param {string} id : id
 * @return {object} user : User Object
 */
export const getUserById = async (id) => {
    return await UserModel.findById(id)
}

/**
 *  Returns an updated user.
 * 
 * @param {string} id : id
 * @param {object} user: new user object
 * @return {object} user : Updated User Object
 */
export const updateUser = async (id, user) => {
    return await UserModel.findByIdAndUpdate(id, user, { new: true })
}

/**
 * Return {}
 * 
 * @param {string} id : id
 */
export const deleteUser = async (id) => {
    return await UserModel.findByIdAndDelete(id);
}


export const searchUser = async (query) => {
    if(query){
        return await UserModel.find({name: { $regex: query, $options: '$i'}})
    }
}

export const updateRole = async (id, role) => {
    return await UserModel.findByIdAndUpdate(id, {role: role}, {new: true})
}