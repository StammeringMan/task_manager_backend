import userRoute from "../api/users/userRoute.js";
import taskRoute from "../api/tasks/taskRoute.js";
import authRoute from "../api/auth/authRoute.js";

export default function routes(app) {
    app.use('/api/v1/tasks',  taskRoute);
    app.use('/api/v1/users', userRoute);
    app.use('/api/v1/auth', authRoute)
}
