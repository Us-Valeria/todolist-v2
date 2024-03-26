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

    res.json({
      message: "True",
    });
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
    const task = await Task.updateOne(
      { _id: taskId },
      {
        title: req.body.title,
        text: req.body.text,
        completed: req.body.completed,
      }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({
      _id: taskId,
      title: req.body.title,
      text: req.body.text,
      completed: req.body.completed,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to update task",
    });
  }
};
