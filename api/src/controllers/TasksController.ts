import { ObjectId } from "mongodb";
import Task from "../models/Task";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to get tasks",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      text: req.body.text,
    });
    const task = await newTask.save();

    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to create task",
    });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({});
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to remove task",
    });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const updateFields: { title?: string; text?: string; completed?: boolean } =
      {};

    if (req.body.title) {
      updateFields.title = req.body.title;
    }

    if (req.body.text) {
      updateFields.text = req.body.text;
    }

    if (req.body.completed !== undefined) {
      updateFields.completed = req.body.completed;
    }

    const task = await Task.updateOne({ _id: taskId }, updateFields);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({
      _id: taskId,
      ...updateFields,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to update task",
    });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const activeId = new ObjectId(req.body.active.id)
    const overId = new ObjectId(req.body.over.id)
    const tasks = await Task.find();

    const activeIndex = tasks.findIndex(task => (task._id.equals(activeId)));
    const overIndex = tasks.findIndex(task => (task._id.equals(overId)));
  
    if (activeIndex === -1 || overIndex === -1) {
      return res.status(400).json({ message: 'Tasks not found' });
    }
  
    const [movedTasks] = tasks.splice(activeIndex, 1);
    tasks.splice(overIndex, 0, movedTasks);

    await Task.deleteMany({});
    await Task.insertMany(tasks);
    res.json({});
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Failed to update tasks",
    });
  }
};
