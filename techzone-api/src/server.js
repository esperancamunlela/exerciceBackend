import express from "express";
import dotenv from "dotenv";
import  userRoute  from "./routes/user-routes.js";
import  courseRoute from "./routes/courseroute.js"

const app = express();
dotenv.config();
app.use(express.json());

const host = process.env.HOST;
const port = process.env.PORT;

app.use("/users", userRoute);
app.use("/cursos",courseRoute)

app.listen(port, () => console.log(`Server running on ${host}:${port}`));
