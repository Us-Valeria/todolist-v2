import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as TaskController from "./controllers/TasksController";

mongoose
  .connect(
    "mongodb+srv://admin:admin@todo.jewkqdj.mongodb.net/todo-list?retryWrites=true&w=majority&appName=Todo"
  )
  .then(() => console.log("bd ok"))
  .catch((err) => console.log("error", err));

const app: Express = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());

app.get("/tasks", TaskController.getAll);
app.post("/tasks", TaskController.create);
app.delete("/tasks/:id", TaskController.remove);
app.put("/tasks/update/:id", TaskController.update);
app.put("/tasks", TaskController.updateOrder);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
