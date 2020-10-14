import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../users/userModel.js";
import config from "../../config.js"


let currentUser = {};
export const registerUser = async (user) => {
    if (await UserModel.findOne({ email: user.email })) {
        throw `A user with email ${user.email} already exist. Please use a different email.`;
    }
    const newUser = new UserModel(user);
    /**
     * Generates hashed password with 10 rounds 
     */
    if (user.password) {
        newUser.hash = bcrypt.hashSync(user.password, 10)
    }
    return await newUser.save()

}

export const loginUser = async (user) => {
    const email = user.email;
    const existingUser = await UserModel.findOne({ email })
    if (existingUser) {
        if (bcrypt.compareSync(user.password, existingUser.hash)) {
            const token = jwt.sign({ sub: existingUser._id }, config.secret, { expiresIn: '7d' });
            currentUser = existingUser
            return {
                ...existingUser.toJSON(),
                token
            };
        }else{
            throw `Incorrect Password`
        }
    }else{
        throw `No User found with email ${email}. Please enter your email.`
    }
}

export default currentUser


