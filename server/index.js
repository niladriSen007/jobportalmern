import express from "express";
import cors from "cors";
import { connectDB } from "./database/connection.js";
import authRouter from "./routers/auth.js";

const app = express();
const PORT = 5000;

connectDB();

//Mainly amra eta likhi coz eta req.body() theke je data amra receive korbo seta ke json data hisebe jate server accept kore seta bojhanor jonne
app.use(express.json());

app.use(cors());

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
