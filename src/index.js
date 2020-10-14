import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/index.js";
import {jwt} from "./utils/jwt.js"

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use(jwt());

routes(app)

mongoose.connect('mongodb://localhost:27017/task-manager')
mongoose.Promise = global.Promise

export default app









