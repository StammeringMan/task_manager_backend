import express from "express";
import {register, login} from "./authController.js"

const authRoute = express.Router();

authRoute
    .post('/register', register)
    .post('/login', login)

    
    
export default authRoute 