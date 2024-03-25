import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: String,
    completed: Boolean,
  },
  { timestamps: true }
);
export default mongoose.model("Task", TaskSchema);
