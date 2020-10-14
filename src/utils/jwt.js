import expressJWT from 'express-jwt';
import { getUserById } from '../api/users/userService.js'
import config from "../config.js"

export const jwt = () => {
    const secret = config.secret;

    return expressJWT({secret, algorithms:['HS256'], isRevoked}).unless({
        path: [
            '/api/v1/auth/login',
            '/api/v1/auth/register'
        ]
    })
}

async function isRevoked(req, payload, done) {
    const user = await getUserById(payload.sub);

    if(!user){
        return done(null, true)
    }

    done();
}
