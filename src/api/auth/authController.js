
import { loginUser, registerUser } from "./authService.js"

/**
 *  Returns an User after login.
 *  Uses an npm package bcrypt to compare the password with user hash
 *  
 * 
 * @param {string} email : email of user in request
 * @param {string} password : password of user in request
 * @return {object} user : User Object
 * @return {string} token: Access token for user
 */
export const login = (req, res) => {
    let user = req.body;
    loginUser(user)
        .then((user) => {
            res.send(user)
        })
        .catch((err) => {
            res
                .status(400)
                .send({
                    message: err.message ? err.message : err || "Some error occurred while login."
                })
        })
}


/**
 *  Returns User Object.
 *  Uses an npm package bcrypt to generate hash for the password
 * 
 * @param {object} user : User Object in request
 * @return {object} user : User Object
 * 
 */
export const register = (req, res) => {
    let user = req.body
    console.log(user)
    registerUser(user)
        .then((user) => {
            res
            .status(200)
            .send({message: 'User registered successfully'})
        })
        .catch((err) => {
            res
                .status(400)
                .send({
                    message: err.message ? err.message : err || "Some error occurred while registration."
                })
        })
}

